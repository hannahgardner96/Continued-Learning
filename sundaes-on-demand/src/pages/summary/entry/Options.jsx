import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import AlertBanner from "../../common/AlertBanner";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://localhost:3030/${optionType}`)
      // optionType is "scoops" or "toppings"
      .then((response) => setItems(response.data))
      .catch((error) => {
        setError(true);
      });
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  //   TODO replace "null" with topping options
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
