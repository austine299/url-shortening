
import './App.css';
import NavBar from './components/NavBar';
import MainBody from './components/MainBody';

function App() {

  return (
    <div className="App">
      <div style={{padding: "0rem 5rem 0rem 5rem"}}><NavBar /></div>
      <MainBody/>
    </div>
  );
}

export default App;
