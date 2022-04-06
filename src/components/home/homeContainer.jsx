import "./homeContainer.scss";
import { CategoryCard } from "./category-card/category-card";

export const HomeContainer = () => {
  return (
    <div>
      <div className="promotion">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/etiquetta-5403d.appspot.com/o/home%2Fhome.jpg?alt=media&token=30dd14ee-1907-4096-a6b4-2758a49ac747"
          alt="Imagen Inicio"
          className="promotion-img"
        />
      </div>
      <div className="banners-categories">
        <CategoryCard
          category="camisas"
          imgUrl="https://firebasestorage.googleapis.com/v0/b/etiquetta-5403d.appspot.com/o/home%2Fcamisas.png?alt=media&token=4c3754be-7555-41c3-93ed-39ebbb6560a2"
        />
        <CategoryCard
          category="pantalones"
          imgUrl="https://firebasestorage.googleapis.com/v0/b/etiquetta-5403d.appspot.com/o/home%2Fpantalones.png?alt=media&token=bc0387fc-1a97-44a9-b1cf-e63f0e5fcfc1"
        />
        <CategoryCard
          category="relojes"
          imgUrl="https://firebasestorage.googleapis.com/v0/b/etiquetta-5403d.appspot.com/o/home%2Frelojes.png?alt=media&token=87eb8d3f-c53c-41e1-8ff4-901eb88fd7df"
        />
        <CategoryCard
          category="sacos"
          imgUrl="https://firebasestorage.googleapis.com/v0/b/etiquetta-5403d.appspot.com/o/home%2Fsacos.png?alt=media&token=725c348c-396e-4d8f-aeba-49d0f12906b7"
        />
        <CategoryCard
          category="zapatos"
          imgUrl="https://firebasestorage.googleapis.com/v0/b/etiquetta-5403d.appspot.com/o/home%2Fzapatos.png?alt=media&token=23812a84-5069-4350-937e-6584d6702b24"
        />
      </div>
    </div>
  );
};
