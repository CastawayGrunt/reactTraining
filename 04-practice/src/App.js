import React, { useState } from "react";
import UserForm from "./components/NewUsers/UserForm";
import UserList from "./components/UserList/UserList";

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

  const deleteItemHandler = (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  };

  let content = (
    <p className="text-3xl font-bold bg-white text-center rounded-md">
      No users found. Maybe add one?
    </p>
  );

  if (users.length > 0) {
    content = (
      <UserList id="user-list" items={users} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div className="bg-gray-800 p-4">
      <UserForm id="user-form" onAddUser={addUsersHandler} />
      <section className=" max-w-md mx-auto my-4">{content}</section>
    </div>
  );
}

export default App;
