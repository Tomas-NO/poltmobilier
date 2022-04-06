import { Link } from "react-router-dom";

export const CategoryCard = ({ category, imgUrl }) => {
  return (
    <Link className="banners-categories-link" to={`/productos/${category}`}>
      <img
        alt={`${category} card`}
        className="banners-categories-img"
        src={imgUrl}
      />
    </Link>
  );
};
