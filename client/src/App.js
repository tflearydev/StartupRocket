import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import { Nav } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'
import { DropdownButton } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import './App.css'
import HomePage from './components/HomePage.js'
import StartupPage from './components/StartupPage.js'
import MemberPage from './components/MemberPage.js'
import InvestorPage from './components/InvestorPage.js'
import Weather from '../src/components/Weather'
import InputField from '../src/components/InputField'

const StyledLink = styled(Link)`
  color: white;
  font-size: 22px;
  font-family: 'Cantarell', sans-serif;
`
class App extends Component {
  constructor () {
    super()
    this.state = {
      name: [],
      weather: [],
      temp: [],
      clouds: []
    }
  }

  getWeather = query => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/find?q=${query}&units=imperial&appid=f92cfed3df0f7d5444b04a2ce82f11ab`
      )
      .then(response => {
        this.setState({
          weather: response.data.list[0],
          temp: response.data.list[0].main.temp,
          clouds: response.data.list[0].weather[0].description
        })
      })
      .catch(error => {
        console.log('Error', error)
      })
  }

  queryWeather = (event, cityName) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      cityName = event.target.value
      this.getWeather(cityName)
    }
  }
  render () {
    return (
      <Router>
        <div className='App'>
          <Navbar expand='lg' bg='dark' variant='dark'>
            <Navbar.Brand class='navvy' href='/'>
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
                <StyledLink to='/' style={{ marginLeft: '243px' }}>
                  Home
                </StyledLink>
                <StyledLink to='/startup' style={{ marginLeft: '80px' }}>
                  Startups
                </StyledLink>
                <StyledLink to='/investor' style={{ marginLeft: '80px' }}>
                  Investors
                </StyledLink>
              </Nav.Link>
            </Nav>
            <InputField queryWeather={this.queryWeather} />
            <ButtonToolbar style={{ marginRight: '20px' }}>
              {['left'].map(direction => (
                <DropdownButton
                  style={{ color: 'black' }}
                  drop={direction}
                  
                  placeholder='x'
                  
                  id={`dropdown-button-drop-${direction}`}
                  key={direction}
                >
                  <Dropdown.Item
                    style={{
                      marginTop: '15px',
                      paddingLeft: '20px',
                      paddingRight: '20px'
                    }}
                  >
                    <Weather
                      city={this.state.weather.name}
                      temp={this.state.temp}
                      clouds={this.state.clouds}
                    />
                  </Dropdown.Item>
                </DropdownButton>
              ))}
            </ButtonToolbar>
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
