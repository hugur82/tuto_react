import React from "react";

const Userlist = (props) => {
  const deleteHandler = (id) => {
    const filteredUser = props.data.filter((u) => u.id !== id);
    props.onDelete(filteredUser);
  };

  return (
    <ul>
      {props.data.map((u) => (
        <li key={u.id} onClick={() => deleteHandler(u.id)}>
          {u.name} à {u.age} ans
        </li>
      ))}
    </ul>
  );
};

export default Userlist;
