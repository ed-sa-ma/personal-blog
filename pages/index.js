import Head from "next/head";
import Link from "next/link";

import { Prismic, prismicClient } from "prismic-configuration.js";
import Card from "@components/card.js";
import Parser from "@components/parser";
import List from "@components/list";

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
          {posts.map((post) => (
            <>
              <h1 style={{ textAlign: "center" }}>{list_headline}</h1>
              <div>
                <Link key={post.uid} href={`/posts/${post.uid}`}>
                  <a>{post.headline}</a>
                </Link>
              </div>
            </>
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

    var posts = results.map(({ uid, data }) => {
      return { uid, headline: data.headline };
    });
  } catch (error) {
    console.error(`Type: ${error.name}`);
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
