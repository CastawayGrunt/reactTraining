import UserItem from "./UserItem";

const UsersList = (props) => {
  return (
    <ul className="bg-white rounded-md p-4">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          username={user.username}
          age={user.age}
          onDelete={props.onDeleteItem}
        >
          {`${user.username} (${user.age} years old)`}
        </UserItem>
      ))}
    </ul>
  );
};

export default UsersList;
