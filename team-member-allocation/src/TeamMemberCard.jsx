import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const TeamMemberCard = ({ employee, selectedTeam, handleEmployeeTeamChange }) => {
    return (
     <div
        id={employee.id}
        className={employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"}
        style={{ cursor: "pointer" }}
        onClick={handleEmployeeTeamChange}>
    {(employee.gender === "male") ? <img src={maleProfile} className="card-img-top" alt={employee.fullName} />
                                : <img src={femaleProfile} className="card-img-top" alt={employee.fullName} />}
    <div className="card-body"> 
        <h5 className="card-title">Name: {employee.fullName}</h5>
        <p className="card-text"><b>Designation:</b> { employee.designation}</p>
    </div>
</div>
)
}

export default TeamMemberCard