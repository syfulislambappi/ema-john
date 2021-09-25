import { useState, useEffect } from 'react';
import { loadProduct, saveProduct } from '../utils/localStorage';
import Cart from "./Cart";
import Product from "./Product";
import Search from './Search';

export default function Main() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState([]);
    
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSearch(data);
            });
    }, []);

    useEffect(() => {
        setCart(loadProduct(products))
    }, [products]);

    const addTocart = (product) => {
        const price = product.price;
        setCart([...cart, price]);
        saveProduct(product);
    }

    return (
        <main>
            <Search cart={cart} products={products} setProducts={setSearch} />
            <div className="container main-container">
                <div className="products">
                    {search.map(product => <Product key={product.key} product={product} addToCart={addTocart} />)}
                </div>
                <Cart cart={cart} />
            </div>
        </main>
    )
}