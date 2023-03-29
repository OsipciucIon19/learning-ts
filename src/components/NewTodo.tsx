import React, {FC, useState} from 'react';
import Todo from "../types/Todo";

type NewTodoProps = {
  addTodo: (todo: Todo) => void
}

const NewTodo: FC<NewTodoProps> = (props) => {
  const [title, setTitle] = useState('')

  const titleInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const submitHandler = (event: React.SyntheticEvent): void => {
    event.preventDefault()

    props.addTodo(new Todo(title))
    setTitle('')
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">
        <input
          type="text"
          id="title"
          name="title"
          onChange={titleInputHandler}
          value={title}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default NewTodo
