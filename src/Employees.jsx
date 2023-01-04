import Teams from './Team';
import './App.css';
import TeamMembers from './TeamMember';


const Employees = ({employees, selectedTeam, handleEmployeeTeamChange, handleTeamChangeEvent}) => {

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <Teams selectedTeam={selectedTeam} handleTeamChangeEvent={ handleTeamChangeEvent}/>
                </div>
            </div>
                
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                                <TeamMembers
                                    employees={employees}
                                    selectedTeam={selectedTeam}
                                    handleEmployeeTeamChange={handleEmployeeTeamChange} />
                       
                        </div>
                </div>
            </div>
        </main>
    )
}
export default Employees;