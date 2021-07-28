import { prismicClient, linkResolver } from "prismic-configuration.js";

export default async function preview(req, res) {
  const { token: ref, documentId } = req.query;

  const url = await prismicClient.getPreviewResolver(ref, documentId).resolve(linkResolver, "/");

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
