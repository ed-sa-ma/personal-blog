import { client } from "prismic-configuration.js";

function linkResolver(doc) {
  // Pretty URLs for known types
  if (doc.type === "post") return `/posts/${doc.uid}`;
  if (doc.type === "landing_page") return "/";

  // Fallback for other types, in case new custom types get created
  return `/${doc.uid}`;
}

export default async function preview(req, res) {
  const { token: ref, documentId } = req.query;

  const url = await client.getPreviewResolver(ref, documentId).resolve(linkResolver, "/");

  if (!url) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({ ref });

  // See https://github.com/vercel/next.js/blob/canary/examples/cms-prismic/pages/api/preview.js
  // res.write(
  //   `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
  //   <script>window.location.href = '${url}'</script>
  //   </head>`
  // );
  // res.end();

  res.redirect(url);
}
