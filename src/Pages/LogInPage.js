import { Link } from 'react-router-dom';
import './LogInPage.css';
import { useState } from 'react';
function LogInPage() {
    const [input1, setInput1] = useState('');//email
    const [input2, setInput2] = useState('');//password
    const [token, setToken] = useState(''); // state to store token
    ////////////////////////////////////////////////////////////////
    const handleSubmit = () => {
        fetch('https://rjja7snw6l.execute-api.us-east-2.amazonaws.com/default/LogIn',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            email: input1,
            password: input2,
            }), }).then((response) => response.json())
            .then((data) => {
            console.log('Success:', data);
            if(data.token){
                setToken(data.token);
                alert("Login Successful");
                //window.location.href = '/'; // Redirect to homepage
            }
            })
            .catch((error) => {
            console.error('Error:', error);
        });
    };
    return (
        <>
            <h1>Login Page</h1>
            <Link to ='/'>
            <button>Back to Homepage</button>
            </Link>
            <p>Welcome to the Login Page please input fields </p>
            Email: <input onChange={(e)=>setInput1(e.target.value)}/>
            Password: <input onChange={(e)=>setInput2(e.target.value)}/>
            <hr/>
            <button onClick={handleSubmit}>
                Submit
            </button>
            <hr/>
            <p>Input1: {input1}</p>
            <p>Input2: {input2}</p>
            {token && (
                <div>
                    <h2>Token:</h2>
                    <p>{token}</p>
                </div>
            )}
       </>
    )
}
export default LogInPage;