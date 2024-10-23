import { v4 as uuidv4 } from "uuid";
import Chance from 'chance'
import { colors } from "./constants";
import { categories } from "./constants";
import { maxPrice } from "./constants";
import { minPrice } from "./constants";
const chance = new Chance();

export const generateProducts = (n = 10) => {
    const products = [];
  
    for (let i = 0; i < n; i++) {
      products.push(generateProduct());
    }
    return products;
  };

    const generateProduct = () => ({
    id: uuidv4(),
    name: getName(),
    description: getDescription(),
    color: getColor(),
    category: getCategory(),
    price: getPrice(),
    rating: getRating(),

  });

  const getName = () => chance.word()
  const getDescription = () => chance.sentence()
  const getColor = () => {
    return colors[Math.floor(Math.random() * 5)];
  };
  const getCategory=()=> categories[Math.floor(Math.random()*10)] 
  const getPrice=()=> Math.floor(Math.random()*(maxPrice-minPrice)+minPrice)
  const getRating=()=> (Math.random()*5).toFixed(1)
