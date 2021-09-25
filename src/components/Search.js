import { FaShoppingCart } from 'react-icons/fa';

export default function Search({cart, products, setProducts}) {
    const onChange = (e) => {
        const searchText = e.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setProducts(matchedProducts);
    }
    return (
        <div className="search-section">
            <div className="container search-container">
                <input placeholder="Search Here..." className="search-input" onChange={onChange} />
                <span className="cart-icon-wrapper"><FaShoppingCart className="cart-icon" /><span className="cart-count">{cart.length === 0 ? 0 : cart.length}</span></span>
            </div>
        </div>
    )
}