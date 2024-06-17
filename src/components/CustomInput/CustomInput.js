import { TextField, Typography } from "@mui/material";
import React from "react";
import classes from "./CustomInput.module.css";

function CustomInput({ value, onChange, label, type }) {
  console.log(value);
  return (
    <div>
      <Typography variant="caption">{label}</Typography>
      <input
        type={type ?? "text"}
        className={classes.input}
        value={value}
        onChange={(e) => onChange(e, label)}
      />
    </div>
  );
}

export default CustomInput;
