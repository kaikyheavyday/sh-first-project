import { action, createStore, persist } from "easy-peasy";

export const store = createStore(
  persist({
    todos: [],
    setTodos: action((state, payload) => {
      state.todos.push({ text: payload, done: false });
    }),
  })
);
