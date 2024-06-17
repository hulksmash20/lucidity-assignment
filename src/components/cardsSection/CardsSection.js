import { ShoppingCart } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import classes from "./CardSection.module.css";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";

function CardsSection() {
  const data = useSelector((state) => state.inventory.data);
  const [stats, setStats] = useState({});
  useEffect(() => {
    const details = {};
    details["total"] = data.length;
    details["value"] = data.reduce((x, y) => {
      console.log(parseInt(y.value.slice(1)) * y.quantity);
      if (!y.disbaled && y.value !== "0") {
        return x + parseInt(y.value.slice(1)) * y.quantity;
      } else {
        return x;
      }
    }, 0);
    details["outOfStock"] = data.filter((x) => x.quantity === 0).length;
    details["categories"] = [...new Set(data.map((x) => x.category))].length;
    setStats(details);
  }, [data]);

  return (
    <div className={classes.cardsSection}>
      <Card
        data={stats.total}
        icon={<ShoppingCart />}
        heading={"Total Product"}
      />
      <Card
        data={stats.value}
        icon={<CurrencyExchangeIcon />}
        heading={"Total store value"}
      />
      <Card
        data={stats.outOfStock}
        icon={<RemoveShoppingCartIcon />}
        heading={"Out of stock"}
      />
      <Card
        data={stats.categories}
        icon={<CategoryIcon />}
        heading={"No. of categories"}
      />
    </div>
  );
}

export default CardsSection;
