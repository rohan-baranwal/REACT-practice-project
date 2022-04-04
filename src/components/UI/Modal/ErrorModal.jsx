import React from "react";
import Wrapper from "../../Helpers/Wrapper";
import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Wrapper>
      <div className={classes.backdrop} onClick={props.onOkayClick} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onOkayClick}>Okay</Button>
        </footer>
      </Card>
    </Wrapper>
  );
};

export default ErrorModal;
