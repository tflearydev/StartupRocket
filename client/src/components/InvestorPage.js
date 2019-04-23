import React, { Component } from 'react'
import axios from 'axios'
import Investor from './Investor.js'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
// import { Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import { CardGroup } from 'react-bootstrap'
// import { Card } from 'react-bootstrap'

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

const StyledLink = styled(Link)`
margin: 0 auto;
background: blue;
border: 2px solid blue;
border-radius: 10px;
color: white;
font-size: 20px;
height: 20px;
width: 70px;;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  padding: 20px;
  border: 1px solid white;
  border-radius: 2px;
  margin: 15px 15px 15px 0;
`

const FlexContainerCentered = styled.div`
  display: flex;
  align-items: center;
`

const FlexRowCentered = styled(FlexContainerCentered)`
  flex-direction: row;
  flex-wrap: wrap;
  `

// const DeleteButton = styled.button`
// height: 40px;
// margin: 0 auto;
// margin-top: 20px;
// margin-right: 800px;
// width: 150px;
// border-radius: 10px;
// background: red;
// border: yellow 1px solid;
// font-weight: bold;
// color: white;
// `

class InvestorPage extends Component {
  //   creating a method to get all startups
  state = {
    investors: [],
    investor: {
      image: '',
      name: '',
      netWorth: '',
      email: ''
    }
//     // redirectToHome: false,
//     // createdInvestor: {}
 }
  
//   componentDidMount = () => {
//     this.getAllInvestors()
//   }


// componentDidMount = () => {
//     if (this.props.match.params) {
//       axios.get(`/api/investors/${this.props.match.params.startupId}`).then(res => {
//         this.setState({
//         //   members: res.data.members,
//           startup: {
//             _id: res.data._id,
//             name: res.data.name
//           }
//         })
//       })
//     }
//   }


//  getAllInvestors = () => {
//     axios.get('/api/investors').then(res => {
//       this.setState({ investors: res.data })
//     })
//   }

// componentDidMount = () => {
//     this.getAllInvestors()
//   }


//   getAllInvestors = () => {
//     axios.get('/api/investors/investors').then(res => {
//       this.setState({ investors: res.data })
//     })
//   }
componentDidMount = () => {
    if (this.props.match.params) {
      axios.get('/api/investors/investors').then(res => {
        this.setState({
        investors: res.data,
          investor: {
            _id: res.data._id,
            name: res.data.name
          }
        })
      })
    }
  }

//   createInvestor = () => {
//       const investorId = this.props.match.params.investorId
//     axios.post(`/api/investors/investors/${investorId}`).then(res => {
//       const newInvestors = [...this.states.investors]
//       newInvestors.unshift(res.data) 
//       this.setState({ investors: newInvestors })
//     })
//   }

createInvestor = () => {
    // const investorId = this.props.match.params.investorId
    axios.post('/api/investors/investors/', { investor: this.state.investor }).then(res => {
        const newInvestors = [...this.state.investors]
        newInvestors.unshift(res.data)
        this.setState({ investors: newInvestors })
      })
    }
  //this will add a new investor to the beginning of the array



  deleteInvestor = investor => {
    const investorId = investor._id
    console.log(investorId)
    axios.delete(`/api/investors/investors/${investorId}`)
    .then(()=>{
        if (this.props.match.params) {
            axios.get('/api/investors/investors').then(res => {
              this.setState({
              investors: res.data,
                investor: {
                  _id: res.data._id,
                  name: res.data.name
                }
              })
            })
          }
    })
  }


  handleChange = (investor, event) => {
    console.log('HANDLE CHANGE')
    
    const newInvestors = [...this.state.investors]

    const investors = newInvestors.map(savedInvestor => {
      if (savedInvestor._id === investor._id) {
        savedInvestor[event.target.name] = event.target.value
      }
      return savedInvestor
    })
    this.setState({investors: investors})
  }


  updateInvestor = (investor, e) => {
    const investorId = investor._id
    console.log(investorId)
    axios
      .patch(`/api/investors/investors/${investorId}`, investor )
      .then(() => {
       

        if (this.props.match.params) {
            axios.get('/api/investors/investors').then(res => {
              this.setState({
              investors: res.data,
                investor: {
                  _id: res.data._id,
                  name: res.data.name
                }
              })
            })
          }


      })
  }
// deleteInvestor = investor => {
//     // const startupId = this.props.match.params.startupId
//     const investorId = investor._id
//     axios.delete(`/api/investors/investor/${investorId}`).then(res => {
//       this.setState({ investors: res.data })
//     })
//   }
// this will allow an investor to be deleted


  // created a method to get all startups

    // createStartup = () => {
    //   axios.post('/api/startups', { startup: this.state.startup }).then(res => {
    //     console.log(res.data)
    //     this.setState({ redirectToHome: true, createdStartup: res.data })
    //   })
    // }

    // handleChange = e => {
    //   const newStartup = { ...this.state.startup }
    //   newStartup[e.target.name] = e.target.value
    //   this.setState({ startup: newStartup })
    // }

    // handleSignUp = e => {
    //   e.preventDefault()
    //   this.createStartup()
    // }


  render () {
    // if (this.state.redirectToHome === true) {
    //   return <Redirect to={`/investor/${this.state.createdInvestor._id}`} />
    // }

    return (
        <div>
          <Wrapper>
              
          <StyledLink to='/' style={{ marginRight: '820px' }}>
              Back
            </StyledLink> 
            {/* <DeleteButton onClick={()=>this.deleteStartup(this.state.startup.startupId)}>Delete Startup</DeleteButton> */}
              
            <br/>
            <br/>
            
  
            <h1>Investors</h1>
            {/* <Button onClick={this.createMember}>New Member</Button> */}
            <button onClick={this.createInvestor}>+ Add Investor</button>
  
            <FlexRowCentered>
              {this.state.investors.map(investor => {
                return (
                  <Card>
                    
                      <Investor
                        key={investor._id}
                        investor={investor}
                        deleteInvestor={this.deleteInvestor}
                        handleChange={this.handleChange}
                        updateInvestor={this.updateInvestor}
                      />
                    
                  </Card>
                )
              })}
            </FlexRowCentered>
          </Wrapper>
        </div>
      )
    }
  }
export default InvestorPage