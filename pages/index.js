import Head from "next/head";

import { Prismic, prismicClient } from "prismic-configuration.js";
import Card from "@components/card";
import List from "@components/list";
import Parser from "@components/parser";
import Preview from "@components/preview";

export default function Home({ doc, posts }) {
  const { headline, list_headline, body } = doc;

  return (
    <>
      <Head>
        <title>Blogerino</title>
      </Head>
      <List>
        <Card>
          <h1 style={{ textAlign: "center" }}>{headline}</h1>
          <Parser data={body} />
        </Card>
        <Card>
          <h1 style={{ textAlign: "center" }}>{list_headline}</h1>
          {posts.map((post) => (
            <Preview key={post.uid} {...post} />
          ))}
        </Card>
      </List>
    </>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  try {
    const docRes = await prismicClient.getSingle("landing_page", previewData);
    const postsRes = await prismicClient.query(
      Prismic.Predicates.at("document.type", "post"),
      previewData
    );
    var { data: doc } = docRes;
    let { results } = postsRes;

    var posts = results.map(({ uid, data, last_publication_date, first_publication_date }) => {
      return {
        uid,
        headline: data.headline,
        updated: last_publication_date,
        published: first_publication_date
      };
    });
  } catch (error) {
    console.error(`Error fetching static props in Home component. Type: ${error.name}`);
    console.error(error.stack);
  }

  return {
    props: {
      doc,
      posts,
      preview
    }
  };
}
