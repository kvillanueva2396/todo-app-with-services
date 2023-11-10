import { FormEvent } from "react";

const TodoForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <form className="flex justify-content-center" onSubmit={handleSubmit}>

      <div className="row mb-2">
        <label htmlFor="todo-title" className="p-0">Title: </label>
        <input type="text" id="todo-title" className="p-0"/>
      </div>

      <div className="row">
        <label htmlFor="todo-description" className="p-0">Description: </label>
        <textarea id="todo-description" className="p-0"></textarea>
      </div>


      <button type="submit" className="btn btn-primary mt-2">Create</button>
    </form>
  )
}

export default TodoForm;