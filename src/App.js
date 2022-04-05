import React, { useState } from "react";
import Wrapper from "./components/Helpers/Wrapper";
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
    <Wrapper>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList} />
    </Wrapper>
  );
}

export default App;
