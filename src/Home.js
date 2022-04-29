import React from 'react'
import {Link} from 'react-router-dom';
import './App.css';
const Home = () => {
    const user = 'Hemanth Roshan Ford';
  return (
    <div>
        <center>
            <h1>Welcome to Home Page</h1>
            {/* <Link to='/dashboard' className='links'>Dashboard</Link>{' '}
            <Link to='/about' className='links'>About</Link> */}

            <Link to={`/dashboard/${user}`} className='links'>Dashboard</Link>{' '}  {/* Below is for path param */}
            <Link to={`/about?name=${user}&age=${26}`} className='links'>About</Link> {/* for query param */}
        </center>
    </div>
  )
}

export default Home