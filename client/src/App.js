import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import './App.css'
import HomePage from './components/HomePage.js'
import StartupPage from './components/StartupPage.js'
import MemberPage from './components/MemberPage.js'

const StyledLink = styled(Link)`
color: white;
font-size: 20px;
`;
class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='/'>
              <img
                alt=''
                src='https://publicdomainvectors.org/photos/Kliponius-Cartoon-rocket-v5.png'
                width='50'
                height='40'
                className='d-inline-block align-top'
              />
             {'StartupRocket'}
            </Navbar.Brand>
            <Nav className='mr-auto'>
            <Nav.Link>
              <StyledLink to='/' style={{ marginLeft: '240px' }}>Home</StyledLink>
             <StyledLink to='/startup' style={{ marginLeft: '110px' }}>Startups</StyledLink>
              <StyledLink to='/investor' style={{ marginLeft: '110px' }}>Investors</StyledLink>
              </Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/startup' component={StartupPage} />
            <Route exact path='/startup/:startupId' component={MemberPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App