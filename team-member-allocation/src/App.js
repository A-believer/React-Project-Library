import './App.css';
import Header from './header';
// import Content from './content';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';

function App() {
  return (
    <div>
      <Header />
      <Employees />
      <Footer/>
    </div>
  );
}

export default App;
