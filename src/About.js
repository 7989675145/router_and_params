import React from 'react'
import {Link} from 'react-router-dom';
import './App.css';
import { useLocation } from 'react-router-dom';
const About = () => {
    const {search} = useLocation();
    const param = new URLSearchParams(search);
  return (
    <div>
        <center>
            <h1>About Page.here we are using query param</h1>
            <p>Name : {param.get('name')}</p><br></br>
            <p>Name : {param.get('age')}</p>
            <Link to='/' className='links'>Back to Home</Link>
        </center>
    </div>
  )
}

export default About