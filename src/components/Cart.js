export default function Cart({cart}) {
    // const localPrice = local.reduce((prev, next) => prev + next, 0);
    const price = cart.reduce((prev, next) => prev + next, 0);
    // const price = localPrice + cartPrice;
    const total = price === 0 ? 0 : price;
    const shipping = price === 0 ? 0 : price <= 100 ? 20 : 40;
    const vat = (total + shipping) * .15;
    const grandTotal = total + shipping + vat;
    return (
        <div className="cart-wrapper">
            <div className="cart">
                <h3>Total {cart.length === 0 ? 0 : cart.length} Product Added</h3>
                <hr />
                <p><b>Total Price: </b>${total.toFixed(2)}</p>
                <hr />
                <p><b>Shipping Cost: </b>${shipping}</p>
                <hr />
                <p><b>Total Vat: </b>${vat.toFixed(2)}</p>
                <hr />
                <p><b>Grand Total: </b>${grandTotal.toFixed(2)}</p>
            </div>
        </div>
    )
}