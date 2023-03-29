import React, {FC} from 'react';
import Todo from "../types/Todo";
import TodoItem from "./TodoItem";

type TodoListProps = {
    todos: Todo[],
    onDeleteTodo: (todoId: string) => void
}

const TodoList: FC<TodoListProps> = (props) => {
    const {todos, onDeleteTodo} = props


    return (
        <ul>
            {todos.map((todo) => <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo.bind(null, todo.id)} />)}
        </ul>
    );
}

export default TodoList;