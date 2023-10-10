import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetUpHandler = async (enteredMeetUpData) => {
    //this will cause the request to go to the in app function
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);

    //this sends the user back to the homepage after the task is finised
    router.push("/");
  };
  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
};

export default NewMeetupPage;
