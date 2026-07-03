const partecipantData = [
    { id: 1, name: "Aurora", totalScore: 1000, gameStatistics: 800, matchNumber: 7 },
    { id: 2, name: "Angela", totalScore: 500, gameStatistics: 650, matchNumber: 3 },
    { id: 3, name: "Francesco", totalScore: 700, gameStatistics: 850, matchNumber: 9 },
    { id: 4, name: "Luca", totalScore: 850, gameStatistics: 700, matchNumber: 5 },
    { id: 5, name: "Carlotta", totalScore: 900, gameStatistics: 750, matchNumber: 9 }
]

function Tournament() {

    const topPlayer = [...partecipantData].sort((a, b) => b.totalScore - a.totalScore);

    return (
        <ol>
            {
                topPlayer.map((player) => (
                    <li key={player.id}>{player.name} {player.totalScore} {player.gameStatistics} {player.matchNumber}</li>
                ))
            }
        </ol>
    )
}

export default Tournament;