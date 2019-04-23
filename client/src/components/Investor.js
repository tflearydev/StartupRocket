import React from 'react'
import styled from 'styled-components'

const InvestorWrapper = styled.div`
  display: flex;
  flex-direction: column;

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

  img {
    width: 300px;
    height: 200px;
  }
`
// put all inside the wrapper to make it mobile responsive

const DeleteButton = styled.button`
  background-color: blue;
  color: #eee;
  font-weight: bold;
  cursor: pointer;
  padding: 15px;
  font-size: 1em;
`

function Investor (props) {
  return (
    <InvestorWrapper>
      <image
        type='image'
        name='image'
        onChange={e => props.handleChange(props.investor, e)}
        onMouseOut={e => props.updateInvestor(props.investor, e)}
        value={props.investor.image}
      />

      <input
        type='text'
        name='name'
        onChange={e => props.handleChange(props.investor, e)}
        onMouseOut={e => props.updateInvestor(props.investor, e)}
        value={props.investor.name}
      />

      <textarea
        name='netWorth'
        rows='1'
        onChange={e => props.handleChange(props.investor, e)}
        onMouseOut={e => props.updateInvestor(props.investor, e)}
        value={props.investor.netWorth}
      />
      <textarea
        name='email'
        rows='1'
        onChange={e => props.handleChange(props.investor, e)}
        onMouseOut={e => props.updateInvestor(props.investor, e)}
        value={props.investor.email}
      />

      <DeleteButton onClick={() => props.deleteInvestor(props.investor)}>
        Delete Investor
      </DeleteButton>
    </InvestorWrapper>
  )
}

export default Investor
