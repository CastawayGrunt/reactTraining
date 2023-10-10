import classes from "./TodoItem.module.css";

type Props = {
  text: string;
  onRemoveTodo: () => void;
};

const TodoItem = ({ onRemoveTodo, text }: Props) => {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>
      {text}
    </li>
  );
};
export default TodoItem;
