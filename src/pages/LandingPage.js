import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div style={{ background: "#c8e6c9", height: "100vh", textAlign: "center" }}>
            <h1>GreenLeaf Store</h1>
            <p>Your trusted online store for healthy and beautiful houseplants.</p>
            <Link to="/products">
                <button>Get Started</button>
            </Link>
        </div>
    );
}
