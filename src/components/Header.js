import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    const total = useSelector(state => state.cart.totalQuantity);

    return (
        <header style={{ padding: "10px", background: "#e8f5e9" }}>
            <Link to="/products">Products</Link> |{" "}
            <Link to="/cart">Cart ({total})</Link>
        </header>
    );
}
