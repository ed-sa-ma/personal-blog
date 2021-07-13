import { useCallback, useState } from "react";
import cn from "classnames";

import { getDiagonal } from "@helpers";
import { useElementResize, useMovingLayers } from "@hooks";
import styles from "@styles/background.module.css";
import ColorIcon from "./colorIcon";

export default function Background() {
  const setCssVar = useCallback((element) => {
    if (element) {
      let windowDiagonal = getDiagonal();

      element.style.setProperty("--screen-diagonal", `${windowDiagonal}px`);
    }
  }, []);
  const wrapperRef = useElementResize(setCssVar);

  const [classes, animate] = useMovingLayers();

  // We don't want css transition to be applied when the component is first rendered.
  const [transition, setTransition] = useState();
  useState(() => {
    setTimeout(() => setTransition(true), 100);
  }, []);

  return (
    <>
      <div className={styles.background} ref={wrapperRef}>
        {classes.map(({ color, position }, idx) => {
          return (
            <div
              className={cn(styles.layer, styles[color], styles[position], {
                [styles.transition]: transition
              })}
              key={`${color}_${idx}`}
            ></div>
          );
        })}
      </div>
      <ColorIcon handleClick={animate} />
    </>
  );
}
