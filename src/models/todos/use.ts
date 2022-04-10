import { useRecoilState, useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { todosState } from './state';

export function useToggleTodo() {
  const [todos, setTodos] = useRecoilState(todosState);

  return (id: string) => {
    const updatedTodos = [...todos];
    const todo = todos.find((currentTodo) => currentTodo.id === id);

    if (todo) {
      const todoIndex = todo ? todos.indexOf(todo) : 0;
      updatedTodos[todoIndex] = { ...todo, completed: !todo.completed };
      setTodos(updatedTodos);
    }
  };
}

export function useAddTodo() {
  const [todos, setTodos] = useRecoilState(todosState);

  return (text: string) => {
    const todo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos([...todos, todo]);
  };
}

export function useTodos() {
  return useRecoilValue(todosState);
}
