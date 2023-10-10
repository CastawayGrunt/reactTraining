import Head from "next/head";
// import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "some address 1",
    description: "this is the first meetup",
  },
  {
    id: "m2",
    title: "a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "some address 2",
    description: "this is the second meetup",
  },
];

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of react meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  //fetch data from api
  //   const client = await MongoClient.connect("link to server");

  //   const db = client.db();

  //   const meetupsCollection = db.collection("meetups");

  //   const meetups = await meetupsCollection.find().toArray();

  //   client.close();

  return {
    props: { meetups: DUMMY_MEETUPS },
    //this sets the props to the fetched data above
    // the object is a mongo specific need, especially the id to string part
    // props: {
    //   meetups: meetups.map((meetup) => ({
    //     title: meetups.title,
    //     address: meetups.address,
    //     image: meetups.image,
    //     id: meetup._id.toString(),
    //   })),
    // },

    //revalidate re-renders the page based on the time you set
    //then the regenerated pages are loaded on demand after deployment
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //fetch data from api
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

export default HomePage;
