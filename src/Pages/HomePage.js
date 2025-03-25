  import logo from '.././logo.svg';
  import Knuckles from '.././Images/Knuckles.jpg';
  import './HomePage.css';
  import { useState, useEffect } from 'react';
  import { Link } from 'react-router-dom';

  function HomePage() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000); // Update every second
      // Clean up the interval on component unmount
      return () => clearInterval(timer);
    }, []);  // Empty dependency array to run this effect only once after mount

    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    const [message, setMessage] = useState("");

    useEffect(() => {
      fetch("https://lg4vp1wifk.execute-api.us-east-2.amazonaws.com/default/PropertyManagementBackend")
        .then(response => response.json())  // ✅ Now this will work
        .then(data => setMessage(data.message)) // ✅ Extract message
        .catch(error => console.error("Error fetching data:", error));
    }, []);


    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////


    return (
          <header className="App-header">
            <h1>Bienvenido a las Casas</h1>
            <div>
            <Link to="/house/1">
                <button>Casa 1</button>
            </Link>
            <Link to="/house/2">
                <button>Casa 2</button>
            </Link>
            <Link to="/house/3">
                <button>Casa 3</button>
            </Link>
            </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h2>Today is {currentTime.toLocaleDateString()} and the time now is {currentTime.toLocaleTimeString()}.</h2>
          </p>
          <div>
            <h1>API Response:</h1>
            <p className='lambda'>{message || "Loading..."}</p>
          </div>
          
          {/* Knuckles Image Below the Slider */}
          <div className="Knuckles">
            <img
              src={Knuckles}
              className="Knuckles-img"
              alt="Ugandan"
              width={300}
              height={300}
            />
          </div>
    
          {/* Learn React Link */}
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=NhKVUFVCjnA&ab_channel=BAUTIELCRACK"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    );
  }

  export default HomePage;