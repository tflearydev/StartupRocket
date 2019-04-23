import React, { Component } from 'react'
import axios from 'axios'
import Member from './Member.js'
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
`;

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

const DeleteButton = styled.button`
height: 40px;
margin: 0 auto;
margin-top: 20px;
margin-right: 800px;
width: 150px;
border-radius: 10px;
background: red;
border: yellow 1px solid;
font-weight: bold;
color: white;
`

class MemberPage extends Component {
  state = {
    startups: {
      name: ''
    },
    members: []
  }

  componentDidMount = () => {
    if (this.props.match.params) {
      axios.get(`/api/startups/${this.props.match.params.startupId}`).then(res => {
        this.setState({
          members: res.data.members,
          startup: {
            _id: res.data._id,
            name: res.data.name
          }
        })
      })
    }
  }

  createMember = () => {
    const startupId = this.props.match.params.startupId
    axios.post(`/api/startups/${startupId}/members`).then(res => {
      const newMembers = [...this.state.members]
      newMembers.unshift(res.data) 
      this.setState({ members: newMembers })
    })
  }
  // This will add the new Member to the beginning of the array

  deleteMember = member => {
    const startupId = this.props.match.params.startupId
    const memberId = member._id
    axios.delete(`/api/startups/${startupId}/members/${memberId}`).then(res => {
      this.setState({ members: res.data })
    })
  }

  deleteStartup=()=>{
    const startupId=this.props.match.params.startupId
    axios.delete(`/api/startups/${startupId}`)
    .then(()=>{
      this.props.history.goBack()
    })
  }
  //Add funcionality to delete a startup


  handleChange = (member, event) => {
    console.log('HANDLE CHANGE')
    
    const newMembers = [...this.state.members]

    const members = newMembers.map(savedMember => {
      if (savedMember._id === member._id) {
        savedMember[event.target.name] = event.target.value
      }
      return savedMember
    })
    this.setState({members: members})
  }

  updateMember = (member, e) => {
    const startupId = this.props.match.params.startupId
    axios
      .patch(`/api/startups/${startupId}/members/${member._id}`, { member })
      .then(res => {
        this.setState({ members: res.data.members })
      })
  }

  render () {
    return (
      <div>
        <Wrapper>
            
        <StyledLink to='/startup' style={{ marginRight: '820px' }}>
            Back
          </StyledLink> 
          <DeleteButton onClick={()=>this.deleteStartup(this.state.startup.startupId)}>Delete Startup</DeleteButton>
 
          <br/>
          <br/>
          
          <h1>Startup Members</h1>
          {/* <Button onClick={this.createMember}>New Member</Button> */}
          <button onClick={this.createMember}>+ Add Member</button>

          <FlexRowCentered>
            {this.state.members.map(member => {
              return (
                <Card>
                  
                    <Member
                      key={member._id}
                      member={member}
                      deleteMember={this.deleteMember}
                      handleChange={this.handleChange}
                      updateMember={this.updateMember}
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

export default MemberPage