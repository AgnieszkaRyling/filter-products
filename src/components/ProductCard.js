import "./ProductCard.css";
import { productsList } from "../data/products.js";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="image-box">
        <img src={product.image} />
      </div>
      <div>
        <p className="title">{product.title}</p>
        <p className="color">{product.color}</p>
        <p className="price">{product.price}zł</p>
      </div>
      <button type="button" className="button">
        Kup teraz!
      </button>
    </div>
  );
};

export default ProductCard;
