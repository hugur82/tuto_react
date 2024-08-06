import React from "react";
import { NavLink } from "react-router-dom";
const DUMMY_EVENTS = [
  { id: "0", title: "Eminem's Concert" },
  { id: "1", title: "Coldplay Live" },
  { id: "2", title: "Jazz Night" },
  { id: "3", title: "Rock Festival" },
  { id: "4", title: "Pop Extravaganza" },
  { id: "5", title: "Classical Evening" },
  { id: "6", title: "Hip Hop Battle" },
  { id: "7", title: "Country Music Fest" },
];
const EventsPage = () => {
  return (
    <>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <NavLink to={event.id}>{event.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
