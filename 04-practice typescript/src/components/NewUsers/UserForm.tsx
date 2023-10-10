import React, { useState } from "react";
import Card from "../UI/Card";
// import Button from "./UI/Button";
import "./UserForm.css";

type User = {
  username: string;
  age: string;
};

type Props = {
  onAddUser: (user: User) => void;
};

const UserForm = ({ onAddUser }: Props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const userChangeHandler = (username: string) => {
    setEnteredUsername(username);
  };
  const ageChangeHandler = (age: string) => {
    setEnteredAge(age);
  };

  const submitHandler = () => {
    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };
    onAddUser(userData);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <label className="user-input">
          Username
          <input
            type="text"
            value={enteredUsername}
            onChange={(event) => userChangeHandler(event.target.value)}
          />
        </label>
        <label className="user-input">
          Age (Years)
          <input
            type="number"
            min="0"
            value={enteredAge}
            onChange={(event) => ageChangeHandler(event.target.value)}
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default UserForm;
