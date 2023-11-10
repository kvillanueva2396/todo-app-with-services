import Todo from '../entities/Todo';
import { TodoState } from '../types/TodoState';

export interface TodoRepository {
  getTodoList(): Promise<Todo[]>;
  addTodo(todo: Todo): boolean;
  upgradeTodoInfo(todo: Todo): boolean;
  upgradeTodoState(todoState: TodoState): boolean;
  deleteTodo(todoId: number): boolean;
  resetTodoList(): boolean;
}
