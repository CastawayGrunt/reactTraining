import React from "react";
// import Card from "../UI/Card";

//arrow function
const UserItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <ul>
      <li
        className="p-2 my-2 flex text-sm font-medium text-gray-900 bg-white rounded border-2 border-gray-600"
        onClick={deleteHandler}
      >
        {props.children}
      </li>
    </ul>
  );
};

export default UserItem;
