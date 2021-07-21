import { RichText } from "prismic-reactjs";

import { htmlSerializer } from "@helpers";

import { linkResolver } from "prismic-configuration";
import CodeImage from "./codeImage";
import Image from "./image";
import CodeBlock from "./codeBlock";
import Stackblitz from "./stackblitz";

export default function Parser({ data = [] }) {
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
          case "code": {
            const { language, code } = slice.primary;
            let codeSnippet = code[0].text;

            return (
              <div key={codeSnippet}>
                <CodeBlock codeSnippet={codeSnippet} language={language} />
              </div>
            );
          }
          case "text": {
            const paragraphs = slice.primary.content;

            return (
              <RichText
                key={paragraphs[0].text}
                linkResolver={linkResolver}
                render={paragraphs}
                htmlSerializer={htmlSerializer}
              />
            );
          }
          case "stackblitz": {
            const id = slice.primary.project_id;

            return <Stackblitz key={id} id={id}></Stackblitz>;
          }
          default: {
            console.warn(`Unknown slice type passed to parser: ${slice["slice_type"]}`);
            return null;
          }
        }
      })}
    </>
  );
}
