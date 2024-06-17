import React, { useEffect } from "react";
import classes from "./CustomTable.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  setInventory,
  disableInventory,
} from "../../reducers/inventory.reducer";
import CustomModal from "../customModal/CustomModal";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function CustomTable({ isAdmin }) {
  const data = useSelector((state) => state.inventory.data);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [editItem, setEditItem] = React.useState({});
  const handleOpen = (e, row) => {
    setEditItem(row);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleDelete = (e, row) => {
    const newData = data.filter((x) => x.name !== row.name);
    dispatch(setInventory(newData));
  };
  const handleDisable = (e, row) => {
    // const x = data;
    // x.forEach((element) => {
    //   if (element.name === row.name) {
    //     element.disbaled = true;
    //   }
    // });
    dispatch(disableInventory(row));
  };

  const handleEdit = (e, row) => {};

  return (
    <div className={classes.tableContainer}>
      <CustomModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        data={editItem}
      />
      <TableContainer component={Paper} sx={{ backgroundColor: "#202023" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tableHeadRow}>
              <TableCell>Name</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                className={classes.tableRow}
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.value}</TableCell>
                <TableCell align="right">
                  <div>
                    <Button
                      disabled={row.disbaled || isAdmin}
                      onClick={(e) => handleOpen(e, row)}
                    >
                      <EditIcon
                        style={{
                          fill: !isAdmin && !row.disbaled ? "green" : "grey",
                        }}
                      />
                    </Button>
                    <Button
                      onClick={(e) => handleDisable(e, row)}
                      disabled={isAdmin}
                    >
                      {!row.disbaled ? (
                        <VisibilityIcon
                          style={{ fill: isAdmin ? "grey" : "violet" }}
                        />
                      ) : (
                        <VisibilityOffIcon
                          onClick={(e) => handleDisable(e, row)}
                          style={{ fill: isAdmin ? "grey" : "violet" }}
                        />
                      )}
                    </Button>
                    <Button
                      disabled={isAdmin}
                      onClick={(e) => handleDelete(e, row)}
                    >
                      <DeleteIcon style={{ fill: isAdmin ? "grey" : "red" }} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustomTable;
