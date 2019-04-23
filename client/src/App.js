import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import './App.css'
import HomePage from './components/HomePage.js'
import StartupPage from './components/StartupPage.js'
import MemberPage from './components/MemberPage.js'
import InvestorPage from './components/InvestorPage.js'

const StyledLink = styled(Link)`
color: white;
font-size: 22px;
font-family: 'Cantarell', sans-serif;
`;

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Navbar expand="lg" bg='dark' variant='dark'>
            <Navbar.Brand class= 'navvy' href='/'>
              <img
                alt=''
                src='https://publicdomainvectors.org/photos/Kliponius-Cartoon-rocket-v5.png'
                width='50'
                height='40'
                className='d-inline-block align-top'
              />
             StartupRocket
            </Navbar.Brand>
            <Nav className='mr-auto'>
            <Nav.Link>
              <StyledLink to='/' style={{ marginLeft: '243px' }}>Home</StyledLink>
             <StyledLink to='/startup' style={{ marginLeft: '80px' }}>Startups</StyledLink>
              <StyledLink to='/investor' style={{ marginLeft: '80px' }}>Investors</StyledLink>
              </Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/startup' component={StartupPage} />
            <Route exact path='/startup/:startupId' component={MemberPage} />
            <Route exact path='/investor/' component={InvestorPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App