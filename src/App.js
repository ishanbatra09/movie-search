
import React from 'react'
import { BrowserRouter as Router,Routes,Link,Route } from 'react-router-dom'


//components
import Navbar from './components/navbar'

//pages
import Homepage from './pages/HomePage'
import Aboutpage from './pages/Aboutpage'
import Singlepage from './pages/Singlepage'

const App = () => {
  return (
    <Router>

      <Navbar />
      <div className='container'>
        <Routes>
        <Route exact path='/' Component={Homepage}  />
        <Route exact path='/about' Component={Aboutpage}  />
        <Route path="/singleshow/:id" element={<Singlepage />}  exact />
        </Routes>
      </div>
    </Router>
  )
}

export default App