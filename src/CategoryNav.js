import React from 'react';
import CategoryLink from './CategoryLink'

export default function CategoryNav(props) {
  return (
    <nav className="categoryNav">
      <h1 className="app-logo">TODOit.</h1>
      <span className="newCategorySpan"></span>
      <ul className="categoryList">
      {props.list.map((link) => (
          <CategoryLink
            key={link.id}
            id={link.id}
            handleCategory={props.handleCategory}
            color={link.color}
            name={link.name}
            handleDelete={props.handleDelete}
            category={props.category}
          />
        ))}
      </ul>
      <button
        className="newCategoryBttn"
        type="button"
        onClick={props.handleClick}>
        New Category
      </button>
    </nav>
  );
}
