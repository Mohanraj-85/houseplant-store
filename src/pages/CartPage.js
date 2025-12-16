import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/cartSlice";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function CartPage() {
    const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <>
            <Header />
            <h2>Shopping Cart</h2>
            <p>Total Items: {totalQuantity}</p>
            <p>Total Cost: ₹{totalPrice}</p>

            {items.map(item => (
                <div key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                    <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                    <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>

                </div>
            ))}

            <button onClick={() => alert("Coming Soon")}>Checkout</button>
            <br />
            <Link to="/products">Continue Shopping</Link>
        </>
    );
}
