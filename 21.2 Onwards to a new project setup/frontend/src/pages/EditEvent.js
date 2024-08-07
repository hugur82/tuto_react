import React from "react";
import { useParams } from "react-router-dom";

const EditEventPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Editing events</h1>
      edit the event number {params.eventId}
    </>
  );
};

export default EditEventPage;
