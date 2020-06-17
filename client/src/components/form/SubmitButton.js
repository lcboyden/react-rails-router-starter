import React, { useState } from "react";

export default function SubmitButton(props) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      style={
        hover
          ? { ...styles.submitButton, ...styles.hover }
          : styles.submitButton
      }
      type="submit"
    >
      {props.label ? props.label : "submit"}
    </button>
  );
}

const styles = {
  submitButton: {
    fontSize: "20px",
    background: "steelblue",
    color: "white",
    border: "none",
    padding: "10px",
    marginTop: "15px",
    width: "100px",
    borderRadius: "3px",
  },
  hover: {
    cursor: "pointer",
    background: "lightsteelblue",
  },
};
