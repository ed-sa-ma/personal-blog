import Head from "next/head";

import { prismicClient, Prismic } from "prismic-configuration";
import Card from "@components/card";
import Parser from "@components/parser";

export default function Post({ doc }) {
  let { headline, body } = doc;

  return (
    <>
      <Head>
        <title>{headline}</title>
      </Head>
      <Card>
        <h1>{headline}</h1>
        <Parser data={body} />
      </Card>
    </>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  let { uid } = params;
  let response = await prismicClient.getByUID("post", uid, previewData);
  let { data: doc } = response;

  return { props: { doc, preview } };
}

export async function getStaticPaths({}) {
  let response = await prismicClient.query(Prismic.Predicates.at("document.type", "post"));
  let { results: docs } = response;

  return {
    paths: docs.map((doc) => {
      return `/posts/${doc.uid}`;
    }),
    fallback: true
  };
}
