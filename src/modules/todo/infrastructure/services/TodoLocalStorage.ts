import Todo from '../../domain/entities/Todo';

const saveTodos = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export { saveTodos };
