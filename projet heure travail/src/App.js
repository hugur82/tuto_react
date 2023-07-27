import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ShowHour from "./components/ShowHour";

function App() {
  const [time, setTime] = useState([{ id: 1, heure: 7, minute: 40 }]);
  const [newId, setNewId] = useState(+time.length + 1);
  const [newTime, setNewTime] = useState({ id: 0, heure: "", minute: "" });

  const fetchNewTime = (props) => {
    console.log(props);
    setNewTime(props);
  };

  const buttonhandler = (e) => {
    if (newTime.heure.trim().length < 1 || newTime.minute.trim().length < 1)
      alert("Entrez l'heure");
    else {
      setTime((prev) => [...prev, newTime]);
      setNewId((prev) => prev + 1);
      console.log(time);
    }
  };

  const removeFromData = (updateData) => {
    setTime(updateData);
  };

  return (
    <div className="App">
      <Form onButtonClick={buttonhandler} onNewTime={fetchNewTime} id={newId} />
      <ShowHour data={time} onRemove={removeFromData} />
    </div>
  );
}

export default App;
