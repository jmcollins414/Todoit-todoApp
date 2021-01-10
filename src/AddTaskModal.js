import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { IoStarOutline } from 'react-icons/io5';
import { IoStar } from 'react-icons/io5';
import CategoryTag from './CategoryTag';

export default function AddTaskModal(props) {
  return (
    <form className="addTaskModal" onSubmit={(e) => props.handleSubmit(e)}>
      <VscChromeClose className="closeIcon" onClick={props.handleClose} />
      <textarea
        className="taskInput"
        placeholder="Add New Task"
        value={props.value}
        onChange={(e) => props.handleChange(e)}
      />
      <span className="prioritySpan">
        <button
          className="priorityBttn"
          type="button"
          onClick={props.handlePriority}>
          {props.priority ? (
            <IoStar className="priorityBttnIcon" />
          ) : (
            <IoStarOutline className="priorityBttnIcon" />
          )}
        </button>{' '}
        Priority?
      </span>
      <fieldset className="categoryPickerContainer">
        <legend className="categoryLegend">Choose a Category</legend>
        {props.list.map((cat) => (
          <CategoryTag
            key={cat.id}
            tagId={cat.id}
            name={cat.name}
            color={cat.color}
            value={cat.color}
            handleClick={props.handleClick}
            task={props.task}
          />
        ))}
      </fieldset>
      <button
        className="addTaskBttn"
        type="submit"
        disabled={
          props.task.text === '' || props.task.category === null ? true : false
        }>
        Add
      </button>
    </form>
  );
}
