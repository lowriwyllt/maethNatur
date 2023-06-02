import { app } from "../firebase.config";
import {
  collection,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
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

export const getAllProducts = async (type, plant, minPrice, maxPrice) => {
  const result = [];
  const types = [];
  const plants = [];
  try {
    console.log("inside getAllProducts");

    const productsRef = collection(db, "products");
    let q = query(
      productsRef,
      where("price", ">=", minPrice),
      where("price", "<=", maxPrice)
    );
    if (type && plant && (minPrice || minPrice === 0) && maxPrice) {
      q = query(
        productsRef,
        where("type", "==", type),
        where("plants", "array-contains", plant),
        where("price", ">=", minPrice),
        where("price", "<=", maxPrice)
      );
    } else if (type) {
      q = query(
        productsRef,
        where("type", "==", type),
        where("price", ">=", minPrice),
        where("price", "<=", maxPrice)
      );
    } else if (plant) {
      q = query(
        productsRef,
        where("plants", "array-contains", plant),
        where("price", ">=", minPrice),
        where("price", "<=", maxPrice)
      );
    }
    const allProducts = await getDocs(q);
    allProducts.forEach((doc) => {
      result.push(doc.data());
      if (doc.data().type) types.push(doc.data().type);
      if (doc.data().plants) plants.push(doc.data().plants);
    });

    const resultsPlants = [...new Set(plants.flat(Infinity))];
    return { result, types, resultsPlants };
  } catch (err) {
    console.log(err);
  }
};

export const getProductByName = async (name) => {
  const result = [];
  try {
    console.log("inside getProductByName");

    const productsRef = collection(db, "products");
    let q = query(productsRef, where("name", "==", name));

    const product = await getDocs(q);
    const result = [];
    product.forEach((doc) => {
      result.push(doc.data());
    });
    return result[0];
  } catch (err) {
    console.log(err);
  }
};
