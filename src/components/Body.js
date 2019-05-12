import React from 'react'

export default function Body(props) {
  return (
    <div>
      <p className="App-info">
        {props.text}
      </p>
      <div>{props.myFunc(1, 2)}</div>
    </div>
  )
};

export const Body2 = () => (
  <div>
    hi from body2
  </div>
)
