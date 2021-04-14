import { useMemo } from "react";
import Prism from "prismjs";
import cn from "classnames";

import styles from "@styles/codeBlock.module.css";

export default function CodeBlock({ codeSnippet, language = "javascript" }) {
  const html = useMemo(() => {
    if (language in Prism.languages) {
      return Prism.highlight(codeSnippet, Prism.languages[language]);
    }

    console.error(`Unknown language passed to Prism: ${language}`);
    return "";
  }, [codeSnippet, language]);

  return (
    <pre className={cn(styles["code-block"], `language-${language}`)}>
      <code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: html }}></code>
    </pre>
  );
}
