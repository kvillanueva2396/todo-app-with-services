import { TodoState } from '../types/TodoState';

export default class Todo {
  title: string;
  description: string | null;
  state?: TodoState;

  constructor(title: string, description: string | null) {
    this.title = title;
    this.description = description;
    this.state = 'TO DO';
  }

  upgradeTodoInfo({ title, description }: Todo): void {
    this.title = title;
    this.description = description;
  }

  upgradeTodoState(state: TodoState): void {
    this.state = state;
  }
}
