import React from 'react'
import styled from 'styled-components'

const StartupWrapper = styled.div`
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
    
`
function Startup (props) {
  return (
      
    <StartupWrapper>
    <image
    type='string'
    name='image'
    value={props.startup.image}
    />

      <input
        type='text'
        name='name'
        value={props.startup.name}
      />

      <textarea 
        name=''
        rows='1'
        value={props.startup.position}
      />

<textarea 
        name=''
        rows='1'
        value={props.startup.industry}
      />

<textarea 
        name=''
        rows='1'
        value={props.startup.previosFunding}
      />

<textarea 
        name=''
        rows='1'
        value={props.startup.website}
      />
      </StartupWrapper>
      
    
  )
}

export default Startup
