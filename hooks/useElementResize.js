import { useEffect, useRef } from "react";

import { debounce } from "@helpers";

/**
 * Attaches an callback to window's resize event and calls it debouced passing a ref as argument.
 * @param {Function} cb
 * @returns {Ref} React reference.
 */
export default function useElementResize(cb) {
  const ref = useRef(null);

  useEffect(() => {
    cb(ref.current);

    const debouncedCb = debounce(cb);

    function handleResize() {
      debouncedCb(ref.current);
    }

    window.addEventListener("resize", handleResize);

    return () => window.addEventListener("resize", handleResize);
  }, [ref.current]);

  return ref;
}
