import { useEffect } from "react";
import sdk from "@stackblitz/sdk";

export default function Stackblitz({ id, options }) {
  const elementId = `embed-${id}`;

  useEffect(() => {
    sdk.embedProjectId(elementId, id, {
      openFile: "script.js",
      view: "preview",
      hideExplorer: true,
      hideNavigation: true,
      ...options
    });
  }, []);

  return <div id={elementId}></div>;
}
