import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import './App.scss'

import About from './pages/About'
import Home from './pages/Home'
import CssUnitTool from './pages/CssUnitTool'

function App() {
  return (
    <>
      <CssBaseline></CssBaseline>
      <Container fixed className="pt-24">
        <Router>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/css-unit-tool'>
              <CssUnitTool />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    </>
  )
}

export default App
