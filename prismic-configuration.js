import Prismic from "@prismicio/client";

const apiEndpoint = process.env.API_ENDPOINT || "";
const accessToken = process.env.ACCESS_TOKEN || "";

const prismicClient = Prismic.client(apiEndpoint, {
  ...(accessToken ? { accessToken } : null)
});

function linkResolver(doc) {
  // Pretty URLs for known types
  if (doc.type === "post") return `/posts/${doc.uid}`;
  if (doc.type === "landing_page") return "/";

  // Fallback for other types, in case new custom types get created
  return `/${doc.uid}`;
}

export { Prismic, prismicClient, linkResolver };
