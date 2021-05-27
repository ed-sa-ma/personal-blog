import Head from "next/head";

import { prismicClient, Prismic } from "prismic-configuration";
import Card from "@components/card";
import Parser from "@components/parser";

export default function Post({ doc = {} }) {
  let { heading_image, headline, body } = doc;

  return (
    <>
      <Head>
        <title>{headline}</title>
      </Head>
      <Card image={heading_image}>
        <h1>{headline}</h1>
        <Parser data={body} />
      </Card>
    </>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  try {
    let { uid } = params;
    let response = await prismicClient.getByUID("post", uid, previewData);
    var { data: doc } = response;
  } catch (error) {
    console.error(`Error fetching static props in Post component. Type: ${error.name}`);
    console.error(error.stack);
  }

  return { props: { doc, preview } };
}

export async function getStaticPaths() {
  try {
    let response = await prismicClient.query(Prismic.Predicates.at("document.type", "post"));
    var { results: docs } = response;
  } catch (error) {
    console.error(`Error fetching static paths in Post component. Type: ${error.name}`);
    console.error(error.stack);
  }

  return {
    paths: docs.map((doc) => {
      return `/posts/${doc.uid}`;
    }),
    fallback: true
  };
}
