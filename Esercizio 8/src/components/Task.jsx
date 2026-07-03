const taskList = ["Mandare mail direzione", "Creare report mensili", "Assegnare mansioni giornaliere", "Stabilire programma mensile"];
const carriedOutTask = ["Controllare fatture", "Completare ordini"];

function Task() {
    return (
        <>
            <p style={{ color: "red" }}>Attività svolte</p>
            <ol className="list-group list-group-numbered">
                {carriedOutTask.map((task, index) => (
                    <li key={index} className="list-group-item">{task}</li>

                ))}
            </ol>
            <p style={{ color: "red" }}>Attività da svolgere</p>
            <ol className="list-group list-group-numbered">
                {taskList.map((task, index) => (
                    <li key={index} className="list-group-item">{task}</li>

                ))}
            </ol>
        </>
    )
}
export default Task;