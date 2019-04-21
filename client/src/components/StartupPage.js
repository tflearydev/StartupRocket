import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { CardGroup } from 'react-bootstrap';
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
  text-decoration: none;
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

//   createStartup = () => {
//     axios.post(`/api/startups/`).then(res => {
//       const newStartups = [...this.states.startups]
//       newStartups.unshift(res.data) 
//       this.setState({ newStartups })
//     })
//   }
  // created a method to get all startups

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
          <br />
        
          
        <Button href='/' style={{ marginRight: '820px' }}>
          Back
        </Button>

        <h1>Startup List</h1>
        <Button class='container' href='/startup'>
          + Add a Startup
        </Button>
        {/* <div
					className="row"
					style={{
						marginLeft: '30px',
						marginBottom: '30px',
						marginTop: '20px'
					}}
				></div> */}

        {this.state.startups.map(startup => {
          return (
            <div className="row text-center"
            style={{
                marginLeft: '20px',
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
											marginLeft: '30px',
											marginRight: '30px',
											backgroundColor: '#adbfd4'
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
                      Site: <a href={startup.website}>https://mercury.co/</a>
                    </Card.Title>
                    
                  </Card.Body>
                </Card>
              </CardGroup>
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
