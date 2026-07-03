let ToDoList = {
    n1: "Fare doccia",
    n2: "Preparare colazione",
    n3: "Fare la spesa",
    n4: "Appuntamento dentista",
    n5: "Programmare riunione"
}

function Todolist() {
    return <>
        <ul className="list-group">
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label" for="firstCheckbox">{ToDoList.n1}</label>
            </li>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                <label className="form-check-label" for="secondCheckbox">{ToDoList.n2}</label>
            </li>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                <label className="form-check-label" for="thirdCheckbox">{ToDoList.n3}</label>
            </li>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label" for="firstCheckbox">{ToDoList.n4}</label>
            </li>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label" for="firstCheckbox">{ToDoList.n5}</label>
            </li>
        </ul>
    </>
};

export default Todolist;
