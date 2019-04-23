import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { CardGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap'

const StyledLink = styled(Link)`
  text-decoration: none;
`

class StartupPage extends Component {
  //   creating a method to get all startups
  state = {
    startups: [],
    startup: {
      image: '',
      name: '',
      industry: '',
      previousFunding: '',
      website: '',
    },
  }
  componentDidMount = () => {
    this.getAllStartups()
  }

  getAllStartups = () => {
    axios.get('/api/startups').then(res => {
      this.setState({ startups: res.data })
    })
  }

    createStartup = () => {
      axios.post('/api/startups', { startup: this.state.startup }).then(res => {
        console.log(res.data)
        this.setState({ redirectToHome: true, createdStartup: res.data })
      })
    }

    handleChange = e => {
      const newStartup = { ...this.state.startup }
      newStartup[e.target.name] = e.target.value
      this.setState({ startup: newStartup })
    }

    handleSignUp = e => {
      e.preventDefault()
      this.createStartup()
    }

  render () {
    if (this.state.redirectToHome === true) {
      return <Redirect to={`/startup/${this.state.createdStartup._id}`} />
    }

    return (
      <div>
          <br />
        
          
        <Button href='/' style={{ marginRight: '820px' }}>
          Back
        </Button>

        <h1>Startup List</h1>

        {this.state.startups.map(startup => {
          return (
            <div className="row text-center"
            style={{
                marginLeft: '5px',
                marginRight: '0px',
                marginBottom: '20px',
                marginTop: '30px'
            }}
        >
              <CardGroup>
              <Card
										key={startup._id}
										className="text-center"
										style={{
											width: '16.8rem',
											marginLeft: '10px',
											marginRight: '30px',
                      backgroundColor: '#adbfd4',
                      display: 'inline-block'
										}}
									>
                  <Card.Img variant='top' src={startup.image} alt='top' />
                  <Card.Body>
                    {/* <div class='col-sm-8'>
                    <div class='row'>
                      <div class='col-sm-6'> */}
                    
                    <Card.Title>
                      <StyledLink
                        to={`/startup/${startup._id}`}
                        key={startup._id}
                      >
                        {startup.name}
                      </StyledLink>
                    </Card.Title>

                    <Card.Title>Industry: {startup.industry}</Card.Title>

                    <Card.Title>
                      Previous Funding: {startup.previousFunding}
                    </Card.Title>
                    
                    <Card.Title>
                      <StyledLink
                      to={`/startup/${startup._id}`}
                      key={startup._id}
                      >
                      {startup.website}
                      </StyledLink>
                    </Card.Title>
                    
                  </Card.Body>
                </Card>
              </CardGroup>
              </div>
        
          )
        })}
        <br />
        <br />
        
        <form onSubmit={this.handleSignUp}>
        <div>
            <label htmlFor='image'>image</label>
            <input
              type='imgLink'
              name='image'
              onChange={this.handleChange}
              value={this.state.startup.image}
            />
          </div>
          <div>
            <label htmlFor='name'>name</label>
            <input
              type='text'
              name='name'
              onChange={this.handleChange}
              value={this.state.startup.name}
            />
          </div>
          <div>
            <label htmlFor='industry'>industry</label>
            <input
              type='text'
              name='industry'
              onChange={this.handleChange}
              value={this.state.startup.industry}
            />
          </div>
          <div>
            <label htmlFor='previousFunding'>previousFunding</label>
            <input
              type='text'
              name='previousFunding'
              onChange={this.handleChange}
              value={this.state.startup.previousFunding}
            />
          </div>
          <div>
            <label htmlFor='website'>website</label>
            <input
              type='text'
              name='website'
              onChange={this.handleChange}
              value={this.state.startup.website}
            />
          </div>
          
          <button>+ Create Startup</button>
          
        </form>
      </div>
    )
  }
}
export default StartupPage
