export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
const initialState: Todo[] = [];

const todos = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE_TODO":
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};

export default todos;
