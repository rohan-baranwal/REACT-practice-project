import React, { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: userName, age: userAge}];
    })
  }

  return (
    <Fragment>
      <div id="backdrop-root"></div>
      <div id="overlay-root"></div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
