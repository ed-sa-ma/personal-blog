import { useCallback, useMemo, useState } from "react";

const COLORS = ["yellow", "blue", "pink", "green"];
const COLOR_CLASSES = [...COLORS, ...COLORS];

const INITIAL_POSITION_CLASSES = [
  "",
  "corner-1",
  "corner-2",
  "corner-3",
  "corner-4",
  "outside",
  "outside",
  "outside"
];

export default function useMovingLayers() {
  const [positionClasses, setPositionClasses] = useState(INITIAL_POSITION_CLASSES);

  const move = useCallback(() => {
    // Moving rist to last position and shifting the rest.
    setPositionClasses((c) => [c[c.length - 1], ...c.slice(0, c.length - 1)]);
  }, []);

  const classes = useMemo(() => {
    let result = [];

    for (let i = 0; i < positionClasses.length; i++) {
      result.push({ color: COLOR_CLASSES[i], position: positionClasses[i] });
    }

    return result;
  }, [positionClasses]);

  return [classes, move];
}
