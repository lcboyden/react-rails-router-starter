import React from "react";

export default function Form(props) {
  function preventDefaultSubmit(e) {
    e.preventDefault();

    // to call the actual handle submit method
    props.onSubmit();
  }
  return (
    <form onSubmit={preventDefaultSubmit} style={styles.form}>
      {props.header && <h3 style={styles.header}>{props.header}</h3>}
      {props.children}
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    justifyContent: "space-around",
    padding: "10px 20px",
    borderRadius: "3px",
    boxShadow: "2px 2px 8px 1px #d8d8d8",
  },
  header: {
    margin: "0 0 10px 0",
    fontWeight: "700",
  },
};
