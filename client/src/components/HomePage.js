import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
background-color: #004A7F;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  border: none;
  height: 50px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: 'Cantarell', sans-serif;
  font-size: 25px;
  font-weight: bold;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  -webkit-animation: glowing 1500ms infinite;
  -moz-animation: glowing 1500ms infinite;
  -o-animation: glowing 1500ms infinite;
  animation: glowing 1500ms infinite;
}
@-webkit-keyframes glowing {
  0% { background-color: #0000FF; -webkit-box-shadow: 0 0 3px #0000FF; }
  50% { background-color: #0000FF; -webkit-box-shadow: 0 0 40px #0000FF; }
  100% { background-color: #0000FF; -webkit-box-shadow: 0 0 3px #0000FF; }
}

@-moz-keyframes glowing {
  0% { background-color: #0000FF; -moz-box-shadow: 0 0 3px #0000FF; }
  50% { background-color: #0000FF; -moz-box-shadow: 0 0 40px #0000FF; }
  100% { background-color: #0000FF; -moz-box-shadow: 0 0 3px #0000FF; }
}

@-o-keyframes glowing {
  0% { background-color: #0000FF; box-shadow: 0 0 3px #0000FF; }
  50% { background-color: #0000FF; box-shadow: 0 0 40px #0000FF; }
  100% { background-color: #0000FF; box-shadow: 0 0 3px #0000FF; }
}

@keyframes glowing {
  0% { background-color: #0000FF; box-shadow: 0 0 3px #0000FF; }
  50% { background-color: #0000FF; box-shadow: 0 0 40px #0000FF; }
  100% { background-color: #0000FF; box-shadow: 0 0 3px #0000FF; }

`;

const Jumbotron = styled.div`
  background-image: url('https://www.cloudways.com/wp-content/uploads/2018/04/startup-head-bnr.png');
  height: 500px;
`
class HomePage extends Component {
  render () {
    return (   
      <Jumbotron>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <StyledLink to='/startup'>Startup Rocket</StyledLink>

      </Jumbotron>
    
    )
  }
};

export default HomePage