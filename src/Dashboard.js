import React from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './App.css';
const Dashboard = () => {
    const param = useParams();
  return (
    <div>
        <center>
            <h1>Hello {param.name}.Welcome to Dashboard Page.we are using path param</h1>
            <Link to='/' className='links'>Back to Home</Link>
        </center>
    </div>
  )
}

export default Dashboard