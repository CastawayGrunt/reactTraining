import React, { useState, useRef } from "react";
import Modal from "../UI/Modal";

// import Button from "./UI/Button";
// import "./UserForm.css";

const UserForm = (props) => {
  const [error, setError] = useState("");

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredUsername.length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1 || enteredAge.length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age( > 0 ).",
      });
      return;
    }
    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };
    props.onAddUser(userData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="bg-white max-w-md p-4 mx-auto rounded-md">
        <form onSubmit={submitHandler}>
          <label className="block text-lg font-bold text-slate-700">
            Username
            <input
              type="text"
              ref={nameInputRef}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            ></input>
          </label>
          <label className="block text-lg font-bold text-slate-700">
            Age (Years)
            <input
              type="number"
              ref={ageInputRef}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            ></input>
          </label>
          <button
            type="submit"
            className="bg-purple-700 my-3 p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
