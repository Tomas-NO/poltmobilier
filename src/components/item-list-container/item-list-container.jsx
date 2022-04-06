import "./item-list-container.scss";
import { ItemList } from "./item-list/item-list";

export const ItemListContainer = ({ items, categoryImg }) => {
  return (
    <div className="item-list-container">
      <img src={categoryImg} alt="category-img" className="category-img" />
      <ItemList items={items} />
    </div>
  );
};
