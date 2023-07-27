import React, { useEffect, useState } from "react";

const Form = (props) => {
  const [newTime2, setNewTime2] = useState({ heure: "", minute: "" });

  useEffect(() => {
    console.log("form = ", newTime2);
    props.onNewTime(newTime2);
  }, [props, newTime2]);

  const addTime = (property, value) => {
    setNewTime2((prev) => ({ id: props.id, ...prev, [property]: value }));
  };

  const addZero = (property, value) => {
    setNewTime2((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    if (
      newTime2.heure > 23 ||
      newTime2.heure < 0 ||
      isNaN(newTime2.heure) ||
      newTime2.heure.trim().length < 1
    ) {
      alert("entrer une heure entre 0 et 23");
    } else if (
      newTime2.minute > 59 ||
      newTime2.minute < 0 ||
      isNaN(newTime2.minute) ||
      newTime2.minute.trim().length < 1
    ) {
      alert("entrer des minutes entre 0 et 59");
    } else {
      if (newTime2.heure < 10) {
        addZero("heure", newTime2.heure);
      }
      props.onButtonClick();
      setNewTime2({ heure: "", minute: "" });
    }
  };
  return (
    <form onSubmit={onClickHandler}>
      <label htmlFor="heure"> Heure : </label>
      <input
        type="text"
        name="heure"
        id="heure"
        maxlength="2"
        value={newTime2.heure}
        onChange={(e) => {
          addTime("heure", e.target.value);
        }}
      />
      <label htmlFor="minute"> Minute : </label>
      <input
        type="text"
        name="minute"
        id="minute"
        maxlength="2"
        value={newTime2.minute}
        onChange={(e) => {
          addTime("minute", e.target.value);
        }}
      />
      <button>ajouter</button>
    </form>
  );
};

export default Form;
