import React from "react";

const ShowHour = (props) => {
  const sortedArray = props.data;
  sortedArray.sort((a, b) => (a.minute < b.minute ? -1 : 1));
  sortedArray.sort((a, b) => (a.heure < b.heure ? -1 : 1));

  const deleteHandler = (id) => {
    const updatedList = props.data.filter((hour) => hour.id !== id);
    props.onRemove(updatedList);
  };
  return (
    <div>
      <ul>
        {sortedArray.map((hour) => (
          <li key={hour.id} onClick={() => deleteHandler(hour.id)}>
            {hour.heure} : {hour.minute}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowHour;
