import React from 'react'
import { Form } from 'react-bootstrap'

const InputField = props => (
  <Form onSubmit={''}>
    <Form.Group controlId=''>
      <Form.Control
        style={{ color: 'black' }}
        type='text'
        placeholder='Enter City Name'
        onKeyDown={props.queryWeather}
      />
    </Form.Group>
  </Form>
)

export default InputField
