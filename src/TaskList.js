import React from 'react';
import CompletionFilters from './CompletionFilters';
import { IoAddCircle } from "react-icons/io5";

export default function TaskList(props) {
  return (
    <main className="taskList">
      <h2 className="filtersHeading">
        {props.category.toUpperCase()} ({props.list.length})
      </h2>
      <CompletionFilters complete={props.complete}handleFilter={props.handleFilter} />
      <button className="newTaskBttn" type="submit" onClick={props.handleNew}>
         New Task <IoAddCircle className="addIcon" />
      </button>
      <ul className="taskListContainer">{props.children}</ul>
    </main>
  );
}
