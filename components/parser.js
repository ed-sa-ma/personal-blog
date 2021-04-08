import { RichText } from "prismic-reactjs";

import CodeImage from "./codeImage";
import Image from "./image";

export default function Parser({ data }) {
  return (
    <>
      {data.map((slice) => {
        switch (slice["slice_type"]) {
          case "image": {
            const maxWidth = slice.primary["max_width"];
            const props = { maxWidth, ...slice.primary.image };

            return <Image key={props.url} {...props} />;
          }
          case "code_image": {
            const codeSnippet = slice.primary["code_snippet"];
            const props = { codeSnippet, ...slice.primary.image };

            return <CodeImage key={props.url} {...props} />;
          }
          case "text": {
            const paragraphs = slice.primary.content;
            return <RichText key={paragraphs[0].text} render={paragraphs} />;
          }
          default: {
            console.warn("Unknown slice type passed to parser");
            return null;
          }
        }
      })}
    </>
  );
}
