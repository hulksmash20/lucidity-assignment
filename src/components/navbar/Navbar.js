import { Stack, Switch, Typography } from "@mui/material";
import React from "react";
import classes from "./navbar.module.css";

function Navbar({ isAdmin, setIsAdmin }) {
  return (
    <div className={classes.navbar}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Admin</Typography>
        <Switch
          inputProps={{ "aria-label": "Switch demo" }}
          color="success"
          checked={isAdmin}
          onClick={() => {
            setIsAdmin(!isAdmin);
          }}
        />
        <Typography>User</Typography>
      </Stack>
    </div>
  );
}

export default Navbar;
