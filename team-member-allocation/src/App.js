import './App.css';
import Header from './header';
// import Content from './content';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { useState } from "react";

function App() {
    const [team, setTeam] = useState("Team B")
    const [employees, setEmployees] = useState([{
      
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
        }])
    
    const handleTeamChangeEvent = (e) => {
        setTeam(e.target.value)
        console.log(e.target.value)
    }

    const handleEmployeeTeamChange = (e) => {
        const employeeTeamChange = employees.map((employee) => employee.id === parseInt(e.currentTarget.id)
            ? (employee.teamName === team) ? { ...employee, teamName: '' } : { ...employee, teamName: team } : employee);
        setEmployees(employeeTeamChange);
    }

  return (
    <div>
      <Header 
        team={team}
        teamMemberCount={employees.filter(employee => employee.teamName === team).length}
      />
      <Employees employees={employees} 
        team={team}
        handleTeamChangeEvent={handleTeamChangeEvent}
        handleEmployeeTeamChange={handleEmployeeTeamChange}
      />
      <Footer/>
    </div>
  );
}

export default App;
