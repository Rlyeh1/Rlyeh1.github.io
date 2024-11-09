import logo from './logo.svg';
import Knuckles from './Images/Knuckles.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/*Edit <code>src/App.js</code> and save to reload.*/}
          Hola pa aqui estaria el sitio web
        </p>
        <img src={Knuckles} className="Knuckles" alt="Ugandan" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
