import { MongoClient } from "mongodb";

//firebase set up
// const {
//   initializeApp,
//   applicationDefault,
//   cert,
// } = require("firebase-admin/app");
// const {
//   getFirestore,
//   Timestamp,
//   FieldValue,
// } = require("firebase-admin/firestore");
// /api/new-meetup

const handler = (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    //attempted firebase set up
    // initializeApp();

    // const db = getFirestore();

    // const meetupsCollection = db.collection("meetups").doc(data);

    // const result = await meetupsCollection.set(data) 

    // console.log(result);

    // res.status(201).json({ message: "meetup inserted!" });
    
    //mongoDb set up to send data to a server
    const client = await MongoClient.connect("link to server");

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: 'meetup inserted!'});
  }
};

export default handler;
