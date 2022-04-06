import { getFirestore, getStorage } from "../firebase/index";
import { ItemListContainer } from "../components/item-list-container/item-list-container";
import { LoadingScreen } from "../components/loadingScreen/loadingScreen";
import { Page } from "../components/page/page";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const Category = () => {
  let { categoryId } = useParams();

  const [loadingItems, setLoadingItems] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  const [items, setItems] = useState([]);
  const [categoryImg, setCategoryImg] = useState("");

  useEffect(() => {
    setLoadingImage(true);
    setLoadingItems(true);

    const getImage = async () => {
      try {
        const storage = getStorage();
        const storageRef = storage.ref();
        const url = await storageRef
          .child(`categories/${categoryId ? categoryId : "productos"}.jpg`)
          .getDownloadURL();
        setCategoryImg(url);
        setLoadingImage(false);
      } catch (error) {
        console.error("Firestore error:", error);
      }
    };

    const getItems = async () => {
      try {
        const db = getFirestore();
        let itemsCollection = db.collection("items");
        if (categoryId !== undefined) {
          itemsCollection = db
            .collection("items")
            .where("category", "==", categoryId);
        }
        const querySnapshot = await itemsCollection.get();
        let data = [];
        querySnapshot.docs.forEach((doc) =>
          data.push({ id: doc.id, ...doc.data() })
        );
        setItems(data);
        setLoadingItems(false);
      } catch (error) {
        console.error("Firestore error:", error);
      }
    };

    getImage();
    getItems();
  }, [categoryId]);

  return (
    <Page id={`category-${categoryId ? categoryId : "productos"}`}>
      {loadingImage && loadingItems ? (
        <LoadingScreen />
      ) : (
        <ItemListContainer items={items} categoryImg={categoryImg} />
      )}
    </Page>
  );
};
