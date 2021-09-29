import Review from "./reviews.js";
import Product from "./products.js";

/* schema
1-choose the type of relationship
2-first i need to understand what methods to use for this specific type of relationship;
3-understand for each association which model  is TARGET and which model is SOURCE 
*/

Product.hasMany(Review)
Review.belongsTo(Product)

export default { Review, Product }