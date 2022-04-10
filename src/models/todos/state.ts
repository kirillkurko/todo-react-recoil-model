import { atom } from 'recoil';
import { Todo } from '@app-types/todo';

export const todosState = atom<Todo[]>({
  key: 'todos',
  default: [],
});
