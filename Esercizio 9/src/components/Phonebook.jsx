const contact = [
    { id: 1, name: "Luca", phonenumber: 368949837 },
    { id: 2, name: "Sara", phonenumber: 321873480 },
    { id: 3, name: "Antonio", phonenumber: 3683748489 },
    { id: 4, name: "Francesco", phonenumber: 3098984212 },
    { id: 1, name: "Cosimo", phonenumber: 3098876634 },
    { id: 1, name: "Margherita", phonenumber: 3765390394 }
];

function Phonebook() {
    return (
        <>
            <p style={{ color: "green" }}>Rubrica telefonica</p>
            <ul>
                {contact.map((data) => (
                    <li key={data.id}>{data.name}: {data.phonenumber}</li>
                ))}
            </ul>


        </>
    )
}
export default Phonebook;