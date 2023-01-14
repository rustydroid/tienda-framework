import { collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const ITEMS_COLLECTION = "items";
const ORDER_COLLECTION = "orders";

export const getAllItems = () => {
  const itemsCollection = collection(db, ITEMS_COLLECTION);
  return getDocs(itemsCollection)
    .then((snapshot) => {
      const items = [];
      snapshot?.docs?.forEach((item) => {
        items.push({
          id: item.uid,
          ...item.data(),
        });
      });
      return items;
    })
    .catch((error) => {
      return error;
    });
};

export const createOrder = async (newData) => {
  const data = newData;
const docRef = await addDoc(collection(db, ORDER_COLLECTION), data);
  console.log("Document written with ID: ", docRef.id);
  return docRef;
};

export const getItemById = (id) => {
  const itemDoc = doc(db, ITEMS_COLLECTION, id);
  return getDoc(itemDoc)
    .then((snapshot) => {
      if (snapshot.exists) {
        return {
          id: snapshot.id,
          ...snapshot.data(),
        };
        // console.log("id: ", snapshot.id);
        // console.log("data: ", snapshot.data());
      }
    })
    .catch((error) => {
      return error;
    });
};
