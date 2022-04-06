import "./item-list.scss";
import { Item } from "./item/item";

export const ItemList = ({ items }) => {
  return (
    <ul className="items">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </ul>
  );
};
