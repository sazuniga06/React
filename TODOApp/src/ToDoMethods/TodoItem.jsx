/* eslint-disable react/prop-types */

import './TodoItem.css';

// eslint-disable-next-line react/prop-types
export function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}>
        V
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.ToDos}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>X</span>
    </li>
  );
}
