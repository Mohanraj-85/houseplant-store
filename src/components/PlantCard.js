import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useState } from "react";

export default function PlantCard({ plant }) {
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(false);

    const handleAdd = () => {
        dispatch(addToCart(plant));
        setDisabled(true);
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={plant.image} alt={plant.name} />
            <h4>{plant.name}</h4>
            <p>₹{plant.price}</p>
            <button onClick={handleAdd} disabled={disabled}>
                Add to Cart
            </button>
        </div>
    );
}
