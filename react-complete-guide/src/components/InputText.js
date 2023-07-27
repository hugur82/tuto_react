import React from "react";
import { useState } from "react";

const InputText = (props) => {
  const [val, setVal] = useState("");

  const inputHandler = (event) => {
    setVal(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.list(val);
    setVal("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={val} onChange={inputHandler} />
        <input type="submit" value="Ajouter" />
      </form>
    </div>
  );
};

export default InputText;
