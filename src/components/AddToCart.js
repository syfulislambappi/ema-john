import { FaShoppingCart } from 'react-icons/fa'

export default function AddToCart({addToCart}) {
    return (
        <button type="button" className="add-to-cart" onClick={addToCart} ><FaShoppingCart /> Add to cart</button>
    )
}