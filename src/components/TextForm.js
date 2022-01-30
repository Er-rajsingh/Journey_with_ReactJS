import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState();
  const handleUpClick = () => {
    let UC = text.toUpperCase();
    setText(UC);
  };
  const handleLoClick = () => {
    let UC = text.toLowerCase();
    setText(UC);
  };
  const handleOnChange = (event) => {
    //below line will set the value under textarea whenever event trigger and it trigger on onChange event listener
    setText(event.target.value);
  };
  const handlePreview = () => {};

  const handleClear = () => {
    setText("");
  };
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-outline-primary mx-2"
          onClick={handleUpClick}
        >
          UpperCase
        </button>
        <button
          className="btn btn-outline-success mx-2"
          onClick={handleLoClick}
        >
          LowerCase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summery</h3>
        <p>
          {text?.split(" ")?.length - 1} words, {text?.length} characters,{" "}
          {0.008 * text?.split(" ").length} Minutes Read
        </p>
      </div>
      <div className="container my-3">
        <h4>
          <b>Preview</b>
        </h4>
        <textarea
          className="form-control"
          value={text}
          onChange={handlePreview}
          id="myBox"
          rows="20"
        ></textarea>
      </div>
    </>
  );
}
