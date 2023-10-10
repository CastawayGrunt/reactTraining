import UserItem from "./UserItem";

const UsersList = (props) => {
  return (
    <ul className="expenses-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          username={user.username}
          age={user.age}
          onDelete={props.onDeleteItem}
        >
          {`${user.username} ${user.age}`}
        </UserItem>
      ))}
    </ul>
  );
};

export default UsersList;
