import { useState } from "react";
import "./App.css";
import Userlist from "./components/Userlist";
import Form from "./components/Form";

function App() {
  const [user, setUser] = useState([
    { id: 1, name: "hakan", age: 40 },
    { id: 2, name: "lebonlabruteetletruand", age: 41 },
    { id: 3, name: "zepek", age: 61 },
    { id: 4, name: "kamle", age: 7 },
  ]);
  const [newId, setNewId] = useState(+user.length + 1);
  const [newUser, setNewUser] = useState({ id: 0, name: "", age: "" });

  const fetchNewUser = (props) => {
    console.log(props);
    setNewUser(props);
  };

  const buttonhandler = (e) => {
    if (newUser.name.trim().length < 1 || newUser.age.trim().length < 1)
      alert("Entrez le nom ou l' age");
    else {
      setUser((prev) => [...prev, newUser]);
      setNewId((prev) => prev + 1);
    }
  };

  const removeFromData = (updateData) => {
    setUser(updateData);
  };

  return (
    <div className="App">
      <Form onButtonClick={buttonhandler} onNewUser={fetchNewUser} id={newId} />

      <Userlist data={user} onDelete={removeFromData} />
    </div>
  );
}

export default App;
