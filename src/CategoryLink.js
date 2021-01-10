import React from 'react';

export default function CategoryNavLink(props) {
 
  const activeStyle={
    backgroundColor : ' rgb(198, 255, 246)'
  }

  return (
    <li id={props.id} className="navLinkLi">
      <div
        className="categoryNavLink"
        id={props.id}
        style={props.category === props.id? activeStyle: null}
        onClick={(e) => props.handleCategory(e)}>
        <div className="colorCont">
          <div
            id={props.id}
            className="categoryLinkColor"
            style={{ backgroundColor: props.color }}></div>
        </div>
        <div className="linkName" id={props.id}>
          {props.name}
        </div>
      </div>
      <button
      className="deleteCatBttn"
        id={props.id}
        onClick={props.handleDelete}
        style={{ display: props.id === 'uncategorized' ? 'none' : 'flex' }}>
        x
      </button>
    </li>
  );
}
