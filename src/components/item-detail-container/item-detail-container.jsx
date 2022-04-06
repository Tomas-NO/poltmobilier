import "./item-detail-container.scss";
import { CartContext } from "../../context/cartContext";
import { ItemDetail } from "./item-detail/item-detail";
import { useContext, useState } from "react";

export const ItemDetailContainer = ({ item, colorsList, itemCartQuantity }) => {
  const { addItem } = useContext(CartContext);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  return (
    <div className="item-detail-container">
      <ItemDetail
        category={item.category}
        image={item.image}
        title={item.title}
        description={item.description}
      />
    </div>
  );
};
