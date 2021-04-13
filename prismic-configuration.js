import Prismic from "@prismicio/client";

export const apiEndpoint = process.env.API_ENDPOINT || "";
export const accessToken = process.env.ACCESS_TOKEN || "";

export const prismicClient = Prismic.client(apiEndpoint, {
  ...(accessToken ? { accessToken } : null)
});

export { Prismic };
