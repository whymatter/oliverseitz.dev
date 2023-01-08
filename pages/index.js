import Head from "next/head";
import ArticleTile from "../components/ArticleTile/ArticleTile";
import articleData from "../data/article";

export default function Home() {
  const articles = articleData;

  return (
    <>
      <Head>
        <title>Oliver Seitz.</title>
      </Head>
      <div class="background-ellipsis-one"></div>
      <div class="background-ellipsis-two"></div>
      <section id="sec-1">
        <h1>Oliver Seitz.</h1>
      </section>
      <section id="sec-2">
        <h2 class="articles-heading">Articles:</h2>

        <div class="article-row">
          {articles.map((o) => (
            <ArticleTile
              headline={o.headline}
              link={o.link}
              abstract={o.abstract}
            ></ArticleTile>
          ))}
        </div>
      </section>
      ƒ
    </>
  );
}
