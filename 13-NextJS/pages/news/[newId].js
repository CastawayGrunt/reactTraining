import { useRouter } from "next/router";

// www.domain.com/news/something-important

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newId;

  // send a request to backend to fetch new based on newsId

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
