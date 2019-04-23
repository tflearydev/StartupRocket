import React, { Component } from 'react'
import axios from 'axios'
import Investor from './Investor.js'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  width: 70px;
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
  }

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

  createInvestor = () => {
    axios
      .post('/api/investors/investors/', { investor: this.state.investor })
      .then(res => {
        const newInvestors = [...this.state.investors]
        newInvestors.unshift(res.data)
        this.setState({ investors: newInvestors })
      })
  }
  // this will add a new investor to the beginning of the array

  deleteInvestor = investor => {
    const investorId = investor._id
    console.log(investorId)
    axios.delete(`/api/investors/investors/${investorId}`).then(() => {
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
    this.setState({ investors: investors })
  }

  updateInvestor = (investor, e) => {
    const investorId = investor._id
    console.log(investorId)
    axios.patch(`/api/investors/investors/${investorId}`, investor).then(() => {
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

  render () {
    return (
      <div>
        <Wrapper>
          <StyledLink to='/' style={{ marginRight: '820px' }}>
            Back
          </StyledLink>

          <br />
          <br />

          <h1>Investors</h1>

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
