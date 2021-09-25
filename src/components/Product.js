import AddToCart from "./AddToCart";
import {FaStar, FaRegStar} from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';

export default function Product({product, addToCart}) {
    const { name, img, stock, price, category, star, starCount } = product;
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={img} alt={name} />
            </div>
            <div className="product-description">
                <h2>{name}</h2>
                <div style={{display: 'flex', alignItems: 'center'}}><b>Reviews: </b> <ReactStars edit={false} filledIcon={<FaStar className="rating-icon" />} emptyIcon={<FaRegStar className="rating-icon" />} value={star} /> ({starCount})</div>
                <p><b>Category: </b>{category}</p>
                <p><b>Price: </b> ${price}</p>
                <p>Available <b>{stock}</b> products in stock</p>
                <AddToCart addToCart={() => addToCart(product)} />
            </div>
        </div>
    )
}