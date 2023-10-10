import Link from "next/link";
// www.domain.com/news

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-framework">NextJs framework</Link>
        </li>
        <li>NextJs article</li>
      </ul>
    </>
  );
}

export default NewsPage;
