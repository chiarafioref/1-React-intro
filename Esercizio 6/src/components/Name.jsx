const nameData = ['Mario Rossi', 'Luca Gialli', 'Michele Verdi', 'Sofia Bruno', 'Sara Ferrari'];

function Name() {
    return (

        <ul>{nameData.map((name, index) =>
            <li key={index}>{name}</li>
        )}
        </ul>
    );
}

export default Name;