import { app } from "../firebase.config";
import { collection, getDocs, getFirestore } from "firebase/firestore";
const db = getFirestore(app);

export const getStockists = async () => {
  const result = [];
  try {
    console.log("inside getStockists");
    const stockists = await getDocs(collection(db, "stockists"));
    stockists.forEach((doc) => {
      result.push(doc.data());
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getAllProducts = async () => {
  const result = [];
  try {
    console.log("inside getAllProducts");
    const allProducts = await getDocs(collection(db, "products"));
    allProducts.forEach((doc) => {
      result.push(doc.data());
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};
