import React, {FC} from 'react';
import Todo from "../types/Todo";

type TodoItemProps = {
    todo: Todo,
    onDeleteTodo: () => void
}
const TodoItem: FC<TodoItemProps> = ({todo, onDeleteTodo}) => {
    return (
        <li>
            <span>{todo.title}</span>
            <span><button onClick={onDeleteTodo}>Delete</button></span>
        </li>
    );
}

export default TodoItem;