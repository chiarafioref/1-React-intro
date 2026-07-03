const information = {
    image: "https://ecoportatil.it/58968-medium_default/apple-iphone-16-128gb-blu-ultramarino-a.jpg",
    name: "iPhone",
    model: "16",
    chargerType: "USB-C",
    price: 879,
    GB: "128 GB",
    discount: "Ottieni subito il 20% di sconto"
}

function Product() {
    let finalPrice = (information.price * 0.8).toFixed(2);

    return <>
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://ecoportatil.it/58968-medium_default/apple-iphone-16-128gb-blu-ultramarino-a.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{information.name}</h5>
                <p className="card-text">{information.model}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{information.chargerType}</li>
                <li className="list-group-item">{information.GB}</li>
                <li className="list-group-item">{information.price}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">{information.discount}</a>
                <a href="#" className="card-link">Prezzo finale: {finalPrice}</a>
            </div>
        </div>
    </>
}

export default Product;