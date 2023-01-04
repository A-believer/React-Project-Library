import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({employees, selectedTeam, handleEmployeeTeamChange}) => {
    return (
        employees.map(employee => (
            <TeamMemberCard employee={employee} selectedTeam={selectedTeam} handleEmployeeTeamChange={ handleEmployeeTeamChange} />
        ))
)
}

export default TeamMembers;