import { useEffect, useRef } from "react";
import useDebounced from "./useDebounced";

export default function useElementResize(cb) {
  const ref = useRef(null);
  const debouncedCb = useDebounced(cb);

  useEffect(() => {
    cb(ref.current);

    function handleResize() {
      debouncedCb(ref.current);
    }

    window.addEventListener("resize", handleResize);

    return () => window.addEventListener("resize", handleResize);
  }, [ref.current]);

  return ref;
}
