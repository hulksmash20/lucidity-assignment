import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Typography } from "@mui/material";
import CardsSection from "./components/cardsSection/CardsSection";
import CustomTable from "./components/customTable/CustomTable";
import axios from "axios";
import { setInventory } from "./reducers/inventory.reducer";

function App() {
  const dispatch = useDispatch();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    axios
      .get("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory")
      .then((res) => {
        console.log(res.data);
        res.data.forEach((element) => {
          element["disbaled"] = false;
        });
        console.log(res.data);
        dispatch(setInventory(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <Typography variant="h3">Inventory Stats</Typography>
      <CardsSection />
      <CustomTable isAdmin={isAdmin} />
    </div>
  );
}

export default App;
