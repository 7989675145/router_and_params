import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import About from './About';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard/:name' element={<Dashboard />}/> {/* for path param */}
          <Route path='/about' element={<About />}/> {/* for query param */}
        </Routes>
      </Router>
    </div>
  )
}

export default App

