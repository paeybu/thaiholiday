import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'

const App = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav')
    var instances = M.Sidenav.init(elems, {})
  }, [])
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
