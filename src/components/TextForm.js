import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState();
  const handleUpClick = () => {
    let UC = text.toUpperCase();
    setText(UC);
  };
  const handleOnChange = (event) => {
    //below line will set the value under textarea whenever event trigger and it trigger on onChange event listener
    setText(event.target.value);
  };
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert In UpperCase
      </button>
    </div>
  );
}
