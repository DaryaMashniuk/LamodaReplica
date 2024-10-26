import { v4 as uuidv4 } from "uuid";
import Chance from 'chance'
import { COLORS } from "./constants";
import { CATEGORIES} from "./constants";
import { MAXPRICE } from "./constants";
import { MINPRICE } from "./constants";
import { IMAGES } from "./constants";
const chance = new Chance();

export const generateProducts = (n = 100) => {
    const products = [];
  
    for (let i = 0; i < n; i++) {
      products.push(generateProduct());
    }
    return products;
  };

  const generateProduct = () => ({
    id: uuidv4(),
    name: chance.word(),
    description: chance.sentence(),
    color: getColor(),
    category: getCategory(),
    price: getPrice(),
    rating: getRating(),
    image: getImage()
});

const getColor = () => chance.pickone(COLORS); 
const getCategory = () => chance.pickone(CATEGORIES); 
const getPrice = () => chance.integer({ min: MINPRICE, max: MAXPRICE }); 
const getRating = () => chance.floating({ min: 0, max: 5, fixed: 1 }); 
const getImage = () => chance.pickone(IMAGES); ; 