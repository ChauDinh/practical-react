import React from "react";

export default props => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div 
      style={{
        textDecoration: props.todo.complete ? 'line-through' : '',
        marginRight: '10px'
      }} 
      onClick={props.toggleComplete}
    >
     {props.todo.text}
    </div>
    <button onClick={props.onDelete}>X</button>
  </div>
)