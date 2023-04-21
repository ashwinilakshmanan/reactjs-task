import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ServiceCards from './components/ServiceCards';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <ServiceCards/>
      <Contact/>
    </div>
    </>
  );
}

export default App;
