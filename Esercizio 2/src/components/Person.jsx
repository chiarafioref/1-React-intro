console.log("script caricato");

const personalData = {
    name: "Mario",
    surname: "Rossi",
    years: 27,
    city: "Firenze"
};
const photo = "https://tse2.mm.bing.net/th/id/OIP.G_WBfWTLfI_q1yYGnCf1PgHaE7?pid=Api&P=0&h=180";


function Person() {
    return <>
        <div className="card" style={{ width: "18rem" }}>
            <img src={photo} />
            <h5 className="card-title">{personalData.name} {personalData.surname}</h5>
            <p className="card-text">{personalData.city}</p>
            <a href="#" className="btn btn-primary">{personalData.years}</a>
        </div>


    </>
}

export default Person;