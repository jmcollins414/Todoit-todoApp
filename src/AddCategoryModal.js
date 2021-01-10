import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import CategoryColor from "./CategoryColor"

export default function AddTaskModal(props) {
  const colors =['#F0BF0B',' #A2C00B','#4C2CAD', '#27A536', '#67CEDF',' #B64483','#2897CF','#F49CAA']

  return (
    <form className="addCategoryModal" onSubmit={(e) => props.handleSubmit(e)}>
      <VscChromeClose className="closeIcon" onClick={props.handleClose} />
      <input className="categoryInput" 
      placeholder="Add new category"
      value={props.value}
      onChange={props.handleChange}
       />
      <fieldset className="categoryColorContainer">
        <legend>Choose Category Color</legend>
        {colors.map(color => <CategoryColor
        key={color} 
        id={color}
       color={color}
       selectedColor={props.selectedColor}
       handleClick={props.handleSelection}/>)}
      </fieldset>
      <button type="submit" className="addCategoryBttn"
      disabled={props.input === '' || props.color=== null? true: false}>Add</button>
    </form>
  );
}
