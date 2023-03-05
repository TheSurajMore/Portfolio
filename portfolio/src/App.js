import Menu  from './Components/Menu'
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Menu/>
      <AllRoutes/>
    </div>
  );
}

export default App;
