import React from 'react';

export default function CategoryTag(props) {
  return (
    <button
      id={props.tagId}
      type="button"
      value={props.color}
      className={`categoryTag ${
        props.task.category === props.id ? 'selectedCategoryTag' : null
      }`}
      onClick={(e) => props.handleClick(e)}
      style={{ backgroundColor: props.color }}>
      {props.name}
    </button>
  );
}
