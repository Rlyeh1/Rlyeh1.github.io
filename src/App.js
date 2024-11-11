import logo from './logo.svg';
import Knuckles from './Images/Knuckles.jpg';
import './App.css';
import Slider from './Components/Slider/Slider.js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    const handleNextClick = () => {
      const items = document.querySelectorAll('.item');
      if (items.length > 0) {
        document.querySelector('.slide').appendChild(items[0]);
      }
    };

    const handlePrevClick = () => {
      const items = document.querySelectorAll('.item');
      if (items.length > 0) {
        document.querySelector('.slide').prepend(items[items.length - 1]);
      }
    };

    if (next && prev) {
      next.addEventListener('click', handleNextClick);
      prev.addEventListener('click', handlePrevClick);
    }

    // Clean up event listeners on component unmount
    return () => {
      if (next) next.removeEventListener('click', handleNextClick);
      if (prev) prev.removeEventListener('click', handlePrevClick);
    };
  }, []); // Empty dependency array to run this effect only once after mount

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola pa aqui estaria el sitio web</p>
        <div><Slider /></div>
        <img
          src={Knuckles}
          className="Knuckles"
          alt="Ugandan"
          width={300}
          height={300}
        />
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