import { getFirestore } from "../firebase/index";
import { ItemDetailContainer } from "../components/item-detail-container/item-detail-container";
import { LoadingScreen } from "../components/loadingScreen/loadingScreen";
import { Page } from "../components/page/page";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

export const Item = () => {
  const { itemId } = useParams();

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});
  const [colorsList, setColorsList] = useState([]);
  const [itemCartQuantity, setItemCartQuantity] = useState(0);

  useEffect(() => {
    const cartItem = cart.filter((item) => item.previousId === itemId);
    if (cartItem !== undefined) {
      let sum = 0;
      cartItem.forEach((item) => {
        sum += item.quantity;
      });
      setItemCartQuantity(sum);
    }

    const getColors = async () => {
      try {
        const db = getFirestore();
        const colorsCollection = db.collection("colors");
        const querySnapshot = await colorsCollection.get();
        let data = [];
        querySnapshot.docs.forEach((doc) =>
          data.push({ id: doc.id, ...doc.data() })
        );
        setColorsList(data);
      } catch (error) {
        console.error("Firestore error:", error);
      }
    };

    const getItem = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = db.collection("items");
        const querySnapshot = await itemsCollection.doc(itemId).get();
        setItem({ id: querySnapshot.id, ...querySnapshot.data() });
        setLoading(false);
      } catch (error) {
        console.error("Firestore error:", error);
      }
    };

    getColors();
    getItem();
  }, [itemId, cart]);

  return (
    <Page id={`item-${itemId}`}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ItemDetailContainer
          item={item}
          colorsList={colorsList}
          itemCartQuantity={itemCartQuantity}
        />
      )}
    </Page>
  );
};
