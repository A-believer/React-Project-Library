const Teams = ({selectedTeam, handleTeamChangeEvent}) => {
    return (
        <select className="form-select form-slelect" value={selectedTeam} onChange={handleTeamChangeEvent}>
                        <option value="Team A">Team A</option>
                        <option value="Team B">Team B</option>
                        <option value="Team C">Team C</option>
                        <option value="Team D">Team D</option>
                    </select>
    )
}

export default Teams;