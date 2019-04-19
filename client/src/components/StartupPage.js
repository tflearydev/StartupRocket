import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Card } from 'react-bootstrap'

const StyledLink = styled(Link)`
  /* margin: 0 auto;
  background: silver;
  border: 2px solid black;
  border-radius: 8px;
  width: 200px;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center; */
`

class StartupPage extends Component {
  //   creating a method to get all startups
  state = {
    startups: [],
    startup: {
      name: '',
      email: '',
      phone: '',
      previousFunding: '',
      website: '',
      members: ''
    },
    redirectToHome: false,
    createdStartup: {}
  }
  componentDidMount = () => {
    this.getAllStartups()
  }

  getAllStartups = () => {
    axios.get('/api/startups').then(res => {
      this.setState({ startups: res.data })
    })
  }
  // created a method to get all startups

  //   createStartup = () => {
  //     axios.post('/api/startups', { startup: this.state.startup }).then(res => {
  //       console.log(res.data)
  //       this.setState({ redirectToHome: true, createdStartup: res.data })
  //     })
  //   }

  //   handleChange = e => {
  //     const newStartup = { ...this.state.startup }
  //     newStartup[e.target.name] = e.target.value
  //     this.setState({ startup: newStartup })
  //   }

  //   handleSignUp = e => {
  //     e.preventDefault()
  //     this.createStartup()
  //   }

  render () {
    if (this.state.redirectToHome === true) {
      return <Redirect to={`/startup/${this.state.createdStartup._id}`} />
    }

    return (
      <div>
        <Button href='/' style={{ marginRight: '820px' }}>
          Back
        </Button>

        <h1>Select or Create Startup</h1>
        <Button class='container' href='/new'>
          + Add Startup
        </Button>
        <br />
        <br />
        <br />

        {this.state.startups.map(startup => {
          return (
            <div>
              <Card style={{ width: '40rem'}}>

                <div class='row review'>
                  <div class='col-sm-4'>
                    <Card.Img variant="top" src={startup.image} />
                  </div>
                  <div class='col-sm-8'>
                    <div class='row'>
                      <div class='col-sm-6'>
                        <Card.Title>
                          <h4>
                            <StyledLink
                              to={`/startup/${startup._id}`}
                              key={startup._id}
                            >
                              {startup.name}
                            </StyledLink>
                          </h4>
                        </Card.Title>
                        {startup.industry}
                      </div>
                      <div class='col-sm-6' />
                    </div>
                    <div class='row'>
                      <div class='col review-quote'>
                        {startup.previousFunding}
                      </div>
                      <div class='row'>
                       {startup.website}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )
        })}
        <br />
        <br />
      </div>
    )
  }
}
export default StartupPage
