import React from 'react';

export default function CategoryColors(props) {
  return (
    <button
      className={`categoryColorBttn ${
        props.selectedColor === props.id ? 'selectedColor' : null
      }`}
      type="button"
      id={props.id}
      style={{ backgroundColor: props.color }}
      onClick={props.handleClick}></button>
  );
}
