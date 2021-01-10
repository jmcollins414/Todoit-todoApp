import React  from 'react';
//IoTrashSharp
import { IoTrashSharp } from "react-icons/io5";



export default function TaskItem(props) {
  const taskItemStyle = {
    background: '#fff',
        borderLeft: `8px solid  ${props.item.priority? 'hsla(56, 100%, 62%, 1': props.color})`,
        borderBottom: `8px solid ${props.color}`
  }
        const completeTaskStyle = {
          // background: `linear-gradient(to right, ${props.color} 7%, rgba(255,255,255,.4) 7%)`,
          backgroundColor: 'rgba(0,0,0,.05)',
          borderLeft: `8px solid  ${props.item.priority? 'hsla(56, 100%, 62%, .4': props.color})`,
          borderBottom: `8px solid ${props.color}`
        
        }         
  
  return (
    <li
      className={`taskItem ${props.item.complete ? 'completedTaskItem' : null}`}
      id={props.id}
      style={
       props.item.complete? completeTaskStyle:taskItemStyle 
      }>
      <input
        className="taskCheckbox"
        type="checkbox"
        onClick={props.handleComplete}
      />
      <span className="taskText">{props.text}</span>
      <button className="taskDeleteBttn" onClick={(e) => props.handleDelete(e)}>
        <IoTrashSharp />
      </button>
    </li>
  );
}
