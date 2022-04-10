import React, { useState, useRef } from "react";
import Card from "../UI/Card/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/Modal/ErrorModal";

const AddUser = (props) => {
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredUserAge, setEnteredUserAge] = useState("");
  const enteredUserNameRef = useRef();
  const enteredUserAgeRef = useRef();

  const [error, setError] = useState(null);

  const addUserHandler = (e) => {
    const enteredUserAge = enteredUserNameRef.current.value;
    const enteredUserName = enteredUserAgeRef.current.value

    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Value Entered",
        message: "Value cannot be zero or empty",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age Entered",
        message: "Value should be >=1",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    
    enteredUserNameRef.current.value='';
    enteredUserAgeRef.current.value='';
  };

  const onOkayClickHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onOkayClickHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            ref={enteredUserNameRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={enteredUserAgeRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
