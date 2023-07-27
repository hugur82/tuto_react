import React, { useEffect, useState } from "react";

const Form = (props) => {
  const [newUser2, setNewUser2] = useState({ name: "", age: "" });

  useEffect(() => {
    console.log("form = ", newUser2);
    props.onNewUser(newUser2);
  }, [props, newUser2]);

  const addUser = (property, value) => {
    setNewUser2((prev) => ({ id: props.id, ...prev, [property]: value }));
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    props.onButtonClick();
    setNewUser2({ name: "", age: "" });
  };
  return (
    <form onSubmit={onClickHandler}>
      <input
        type="text"
        name="name"
        id="name"
        value={newUser2.name}
        onChange={(e) => {
          addUser("name", e.target.value);
        }}
      />
      <input
        type="text"
        name="age"
        id="age"
        value={newUser2.age}
        onChange={(e) => {
          addUser("age", e.target.value);
        }}
      />
      <button>ajouter</button>
    </form>
  );
};

export default Form;
