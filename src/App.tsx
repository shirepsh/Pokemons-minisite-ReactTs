import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
            <Navbar/>
            {/* Main content start */}
            <Outlet />
            {/* Main content end */}
            <Footer/>
    </div> );}
export default App;    
