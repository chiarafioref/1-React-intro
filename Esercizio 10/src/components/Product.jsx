const productsData = [
    { id: 1, name: "Smartphone 5G", price: 299 },
    { id: 2, name: "Cuffie Wireless", price: 79 },
    { id: 3, name: "Smartwatch Sport", price: 129 },
    { id: 4, name: "Zaino Porta PC", price: 45 }
];

function Product() {
    return (
        <>
            <h1 style={{ color: "purple", textAlign: "center" }}>I prodotti più venduti del mese</h1>
            {productsData.map((ourproduct) => (
                <h5 key={ourproduct}>{ourproduct.name} a soli {ourproduct.price}€</h5>

            ))}

        </>
    )
}
export default Product;