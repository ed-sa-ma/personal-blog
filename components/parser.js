import Image from "./image";

export default function Parser({ data }) {
  return (
    <>
      {data.map((slice) => {
        switch (slice["slice_type"]) {
          case "image": {
            const maxWidth = slice.primary["max-width"][0]?.text;
            const props = { maxWidth, ...slice.primary.image };
            return <Image key={props.url} {...props} />;
          }
          case "text": {
            const paragraphs = slice.primary.content;
            return (
              <div key="">
                {paragraphs.map((parag) => (
                  <p key={parag.text}>{parag.text}</p>
                ))}
              </div>
            );
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
