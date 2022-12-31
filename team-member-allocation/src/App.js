import './App.css';
import Header from './header';
// import Content from './content';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GroupedTeamMembers from './GroupedTeamMembers'
import Nav from './Nav';
import NotFound from './NotFound';

function App() {
    const [team, setTeam] = useState(JSON.parse(localStorage.getItem('team')) || "Team B")
    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) ||[{
      
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "Team A"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "Team A"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "Team A"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "Team B"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "Team B"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "Team B"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "Team C"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "Team C"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "Team C"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "Team D"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "Team D"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "Team D"
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
  
  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]) 

  useEffect(() => {
    localStorage.setItem('team', JSON.stringify(team));
  }, [team]) 

  return (
    <Router>
      <Nav/>
      <Header 
        team={team}
        teamMemberCount={employees.filter(employee => employee.teamName === team).length}
      />
      <Routes>
        <Route path='/' element={<Employees employees={employees} 
        team={team}
        handleTeamChangeEvent={handleTeamChangeEvent}
        handleEmployeeTeamChange={handleEmployeeTeamChange}
        />}>
        </Route>
        
        <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
