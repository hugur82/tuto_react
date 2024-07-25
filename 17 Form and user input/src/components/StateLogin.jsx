import React, { useState } from "react";

const StateLogin = () => {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({ ...prevValues, [identifier]: value }));
  }

  return <div>StateLogin</div>;
};

export default StateLogin;
