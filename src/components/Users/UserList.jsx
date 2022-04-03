import React from "react";
import Card from "../UI/Card/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={`${classes.users} ${props.className}`}>
      <ul>
        {props.users.map((us) => {
          return (
            <li key={`user-${Math.random()}`}>
              {us.name} is {us.age} years old.
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
