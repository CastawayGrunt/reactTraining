import React from "react";
import Card from "../UI/Card";

//arrow function
const UserItem = (props) => {
  const deleteHandler: React.MouseEventHandler<HTMLLIElement> = () => {
    props.onDelete(props.id);
  };

  return (
    <Card>
      <li onClick={deleteHandler}>{props.children}</li>
    </Card>
  );
};

export default UserItem;
