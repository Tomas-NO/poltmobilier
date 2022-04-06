import "./item.scss";
import { Link } from "react-router-dom";

export const Item = ({ id, title, price, images }) => {
  return (
    <li id={id} className="items-item">
      <Link to={`/item/${id}`}>
        <img className="items-item-img" src={images[0]} alt="item-img" />
        <h3 className="items-item-title">{title}</h3>
      </Link>
      <p className="items-item-price">${price}</p>
    </li>
  );
};
