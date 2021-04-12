import Head from "next/head";
import { prismicClient } from "prismic-configuration.js";

import Layout from "@components/layout.js";
import Card from "@components/card.js";
import Parser from "@components/parser";

export default function Home({ doc }) {
  const { headline, body } = doc;

  return (
    <Layout>
      <Head>
        <title>Blogerino</title>
      </Head>
      <Card>
        <h1 style={{ textAlign: "center" }}>{headline}</h1>
        <Parser data={body} />
      </Card>
    </Layout>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  try {
    const response = await prismicClient.getSingle("landing_page", previewData);
    var { data: doc } = response;
  } catch (error) {
    console.error(`Type: ${error.name}`);
    console.error(error.stack);
  }

  return {
    props: {
      doc,
      preview
    }
  };
}
