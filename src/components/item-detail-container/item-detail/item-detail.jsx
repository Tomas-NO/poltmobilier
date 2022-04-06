import "./item-detail.scss";

export const ItemDetail = ({ category, image, title, description }) => {
  return (
    <div className="item-detail">
      <div className="item-detail-images">
        <div className="item-detail-selected-image">
          <img id="selected-image" src={image} alt="item-img" />
        </div>
      </div>
      <div className="item-detail-shop">
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{description}</p>
        <p className="item-price">${price}</p>
      </div>
    </div>
  );
};
