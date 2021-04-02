import { useCallback, useState } from "react";
import cn from "classnames";

import { getDiagonal } from "@helpers";
import { useElementResize, useMovingLayers } from "@hooks";
import styles from "@styles/background.module.css";

export default function background() {
  const [transition, setTransition] = useState();
  const setSizeVar = useCallback((element) => {
    let windowDiagonal = getDiagonal();

    element.style.setProperty("--screen-diagonal", `${windowDiagonal}px`);
  }, []);

  const wrapperRef = useElementResize(setSizeVar);

  const [classes, animate] = useMovingLayers();

  useState(() => {
    setTimeout(() => setTransition(true), 100);
  }, []);

  function handleKeyDown(event) {
    console.log(event.key);
    if (event.key === "Enter") animate();
  }

  return (
    <>
      <div className={styles.background} ref={wrapperRef}>
        {classes.map(({ color, position }, idx) => {
          // The layer on bottom-right corner position is the clickable one.
          const isClickable = position === "corner-4";

          return (
            <div
              className={cn(
                styles.layer,
                styles[color],
                styles[position],
                {
                  [styles.transition]: transition
                },
                { [styles.clickable]: isClickable }
              )}
              onClick={isClickable ? animate : null}
              onKeyDown={isClickable ? handleKeyDown : null}
              key={`${color}_${idx}`}
              tabIndex={isClickable ? 0 : null}
            ></div>
          );
        })}
      </div>
    </>
  );
}
