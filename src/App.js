import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Service/>
      <Portfolio/>
      <ContactMe/>
    </div>
  );
}

export default App;
