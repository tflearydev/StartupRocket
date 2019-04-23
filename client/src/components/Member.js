import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

const MemberWrapper = styled.div`
    display: flex;
    flex-direction: column;

    /* input, textarea,  {
        padding: 10px;
        margin-bottom: 5px;
        font-size: 1.05em;
        background-color: transparent;
        border: none;
    } */
    input {
        padding: 10px;
        margin-bottom: 5px;
        margin-right: 25px;
        font-size: 1.15em;
        align-items: center;
        background-color: white;
        border: solid;
        font-weight: bold;
    }
    textarea {
        padding: 10px;
        margin-bottom: 5px;
        margin-right: 19px;
        align-items: center;
        font-size: 1.15em;
        background-color: white;
        border: solid;
        font-weight: bold;
    }
    
    /* img {
        width: 300px;
        height: 200px;
    } */
`
//put all inside the wrapper to make it mobile responsive

const DeleteButton = styled.button`
    background-color: blue;
    color: #eee;
    font-weight: bold;
    cursor: pointer;
    padding: 15px;
    font-size: 1em;
`


function Member (props) {
  return (
      
    <MemberWrapper>
    
      <input
        type='text'
        name='name'
        onChange={e => props.handleChange(props.member, e)}
        onMouseOut={e => props.updateMember(props.member, e)}
        value={props.member.name}
      />

      <textarea 
        name='position'
        rows='1'
        onChange={e => props.handleChange(props.member, e)}
        onMouseOut={e => props.updateMember(props.member, e)}
        value={props.member.position}
      />

      {/* <img src={props.member.image} alt='https://unixtitan.net/images/converse-clipart-shoe-jordan-3.png'/>
      
      <a href={props.member.value}>Buy or Sell</a> */}
    

      <DeleteButton onClick={() => props.deleteMember(props.member)}>
        Delete Member
      </DeleteButton>
      </MemberWrapper>
      
    
  )
}

export default Member