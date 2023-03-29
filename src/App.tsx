import React, {useState} from 'react';
import Todo from "./types/Todo";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todo: Todo) => {
    setTodos((prevState) => [...prevState, todo])
  }

  const deleteTodoHandler = (todoId: string) => {
    setTodos((value) => value.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodoHandler}
      />
      <NewTodo addTodo={addTodoHandler}/>
    </div>
  );
}

export default App
