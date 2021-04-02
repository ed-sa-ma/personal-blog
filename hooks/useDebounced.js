const { useCallback, useRef } = require("react");

const DEFAULT_TIME = 300;

export default function useDebounced(cb, debounceTime = DEFAULT_TIME) {
  const timeout = useRef(null);

  const debounced = useCallback(
    (...args) => {
      if (timeout.current) {
        clearTimeout(timeout);
        timeout.current = null;
      }

      timeout.current = setTimeout(() => {
        cb(...args);
      }, debounceTime);
    },
    [cb, debounceTime]
  );

  return debounced;
}
