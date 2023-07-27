import React, { useState } from "react";

const TodooList = () => {
  const [userList, setUserList] = useState([{ name: "hakan", age: 40 }]);

  const changeHandler = (input, value) => {
    setUserList((prev) => {
      return [...prev, { [input]: value }];
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(userList);
  };

  return (
    <div>
      <form action="">
        <label htmlFor="">name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(event) => {
            changeHandler("name", event.target.value);
          }}
        />
        <label htmlFor="">age</label> <input type="text" name="age" id="age" />
        <button onClick={submitHandler}>Valider</button>
      </form>
    </div>
  );
};

export default TodooList;
