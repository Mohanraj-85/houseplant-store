import plants from "../data/plants";
import PlantCard from "../components/PlantCard";
import Header from "../components/Header";

export default function ProductList() {
    const categories = [...new Set(plants.map(p => p.category))];

    return (
        <>
            <Header />
            {categories.map(cat => (
                <div key={cat}>
                    <h2>{cat}</h2>
                    <div style={{ display: "flex", gap: "10px" }}>
                        {plants.filter(p => p.category === cat).map(p => (
                            <PlantCard key={p.id} plant={p} />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
