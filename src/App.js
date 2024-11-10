import logo from './logo.svg';
import Knuckles from './Images/Knuckles.jpg';
import './App.css';
import Slider from './Components/Slider/Slider.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/*Edit <code>src/App.js</code> and save to reload.*/}
          Hola pa aqui estaria el sitio web
        </p>
        <Slider />
        <img src={Knuckles}
         className="Knuckles"
         alt="Ugandan"
         width={300}
         height={300}/>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=NhKVUFVCjnA&ab_channel=BAUTIELCRACK"
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
