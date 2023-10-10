import React, { useState } from "react";
import UserForm from "./components/NewUsers/UserForm";
import UserList from "./components/UserList/UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUsersHandler = ({ username, age }) => {
    setUsers((prevUsers) => {
      return [
        {
          username: username,
          age: age,
          id: Math.random().toString(),
        },
        ...prevUsers,
      ];
    });
  };

  // const addUsersHandler = ({ username, age }) => {
  //   setUsers((prevUsers) => {
  //     console.log(enteredUsername);
  //     console.log(enteredAge);
  //     const updatedUsers = [...prevUsers];
  //     console.log(updatedUsers);
  //     updatedUsers.unshift({
  //       username: enteredUsername,
  //       age: enteredAge,
  //       id: Math.random().toString(),
  //     });
  //     console.log(updatedUsers);
  //     return updatedUsers;
  //   });
  // };

  const deleteItemHandler = (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No users found. Maybe add one?</p>
  );

  if (users.length > 0) {
    content = (
      <UserList id="user-list" items={users} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <UserForm id="user-form" onAddUser={addUsersHandler} />
      <section>{content}</section>
    </div>
  );
}

export default App;
