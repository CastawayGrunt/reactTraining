// import { mongoClient, objectId } from 'mongodb'

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <>
      <MeetupDetail
        // image={props.meetupData.image}
        // title={props.meetupData.title}
        // address={props.meetupData.address}
        // description={props.meetupData.description}
        image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
        title="first Meetup"
        address="Some street 5, some city"
        description="the first meet up"
      />
    </>
  );
};

export async function getStaticPaths() {
  //mongodb set up
  //   const client = await MongoClient.connect("link to server");

  //   const db = client.db();

  //   const meetupsCollection = db.collection("meetups");

  //   //the first param is filter criteria, an empty object just finds everything
  //   const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  //   client.close();

  return {
    //fallback lets it know that all the paths are defined,
    //false stating they are, and true that they are not and it needs a fallback
    fallback: false,

    // fallback: blocking  tells next js to generate the page if it can't find it.
    //this combined with the database query above generates all the paths dynamically
    // paths: meetups.map(meetup => ({
    //     params: {meetupId: meetup._id.toString()}
    // }))

    //these paths are the predefined paths for the dynamic page. these can be gernerated dynamically
    paths: [
      {
        params: { meetupId: "m1" },
      },
      {
        params: { meetupId: "m2" },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for single meetup
  //mongodb set up
  //   const client = await MongoClient.connect("link to server");

  //   const db = client.db();

  //   const meetupsCollection = db.collection("meetups");

  //   //the first param is filter criteria, an empty object just finds everything
  //   const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

  //   client.close();

  const meetupId = context.params.meetupId;

  return {
    props: {
      // redering props with mongoDb
      //   meetupData: {
      //     id: selectedMeetup._id.toString(),
      //     title: selectedMeetup.title,
      //     address: selectedMeetup.address,
      //    image: selectedMeetup.image,
      //     description: selectedMeetup.description,
      //   },
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "A first Meetup",
        address: "some street 1, some city",
        description: "the description",
      },
    },
  };
}

export default MeetupDetails;
