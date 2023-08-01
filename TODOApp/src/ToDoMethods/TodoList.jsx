import "./TodoList.css"
/* eslint-disable react/prop-types */
export function TodoList({ children }) {
    return (
        <ul className="TodoList">
          { children }
        </ul>
    );
  }