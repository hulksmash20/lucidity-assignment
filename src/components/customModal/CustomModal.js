import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import classes from "./CustomModal.module.css";
import CustomInput from "../CustomInput/CustomInput";
import { useDispatch } from "react-redux";
import { editInventory } from "../../reducers/inventory.reducer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#292B27",
  boxShadow: 24,
  p: 4,
  color: "white",
};

function CustomModal({ open, handleClose, handleOpen, data }) {
  const [editedData, setEditedData] = useState(data);
  const dispatch = useDispatch();

  const onChange = (e, x) => {
    switch (x) {
      case "Category":
        setEditedData({ ...editedData, category: e.target.value });
        break;
      case "Price":
        setEditedData({ ...editedData, price: e.target.value });
        break;
      case "Quantity":
        setEditedData({ ...editedData, quantity: e.target.value });
        break;
      case "Value":
        setEditedData({ ...editedData, value: e.target.value });
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    setEditedData(data);
  }, [data]);

  const handleSave = (e) => {
    dispatch(editInventory(editedData));
    handleClose();
    setEditedData({});
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ backdropFilter: "blur(2px)" }}
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h4"
          style={{ lineHeight: "15px" }}
        >
          Edit Product
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
          {data.name}
        </Typography>

        <div className={classes.mainContainer}>
          <div className={classes.inputContainer}>
            <CustomInput
              value={editedData.category}
              onChange={onChange}
              label={"Category"}
            />

            <CustomInput
              value={editedData.price}
              onChange={onChange}
              label={"Price"}
            />
          </div>
          <div className={classes.inputContainer}>
            <CustomInput
              value={editedData.quantity}
              onChange={onChange}
              label={"Quantity"}
              type={"number"}
            />
            <CustomInput
              value={editedData.value}
              onChange={onChange}
              label={"Value"}
            />
          </div>
        </div>
        <div className={classes.buttonDiv}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </Box>
    </Modal>
  );
}

export default CustomModal;
