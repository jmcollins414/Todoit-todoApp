import React from "react";

export default function CompletionFilters(props) {
  const activeStyle = {
    backgroundColor: "#339394",
    color: "#FFF",
    outline: 0
  };
  const filter = ["All", "Complete", "Incomplete"];
  return (
    <nav className="completionBttnsContainer">
    
      {filter.map((item) => (
        <button
          key={item}
          className="completionBttn"
          onClick={(e) => props.handleFilter(e)}
          style={props.complete === item ? activeStyle : null}
          id={item}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
