import { useEffect, useRef } from "react";

export default function useCssVariable(value, name, unit = "px") {
  const ref = useRef();

  useEffect(() => {
    if (value && ref.current) {
      ref.current.style.setProperty(name, `${value}${unit}`);
    } else if (ref.current && !value) {
      ref.current.style.removeProperty(name);
    }
  }, [value, name]);

  return ref;
}
