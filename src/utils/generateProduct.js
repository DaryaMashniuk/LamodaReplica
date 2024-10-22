import { v4 as uuidv4 } from "uuid";
import Chance from 'chance'
const chance = new Chance();

export const generateProducts = (n = 10) => {
    const products = [];
  
    for (let i = 0; i < n; i++) {
      products.push(generateProduct());
    }
    //console.log(products);
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

  const getName = () => chance.word()//Math.random().toString(36).substring(2, 10);
  const getDescription = () => chance.sentence()//Math.random().toString(36).substring(2, 40);
  const getColor = () => {
    const colors = ["green", "blue", "black", "red", "white"];
    return colors[Math.floor(Math.random() * 5)];
  };

  const getCategory=()=> {
    const categories = [
      "Electronics",
      "Clothing",
      "Home & Garden",
      "Sports & Outdoors",
      "Beauty & Health",
      "Books",
      "Toys & Games",
      "Automotive",
      "Food & Beverages",
      "Jewelry"
  ];
 return categories[Math.floor(Math.random()*10)] 
  }
  const maxPrice = 9999;
  const minPrice =10
  const getPrice=()=> Math.floor(Math.random()*(maxPrice-minPrice)+minPrice)
  const getRating=()=> (Math.random()*5).toFixed(1)
