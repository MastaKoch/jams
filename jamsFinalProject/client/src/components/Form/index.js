import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
  { key: 'user', text: 'Name', value: 'username' },
  
]

class FormExampleSubcomponentControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        {/* <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        </Form.Group> */}
        <Form.Group inline>
          <label>Agree or Disagree?</label>
          <Form.Radio
            label='Agree'
            value='ag'
            checked={value === 'ag'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Disagree'
            value='dg'
            checked={value === 'dg'}
            onChange={this.handleChange}
          />
          
        </Form.Group>
        <Form.TextArea label='What are your thoughts?' placeholder='Comments' />
        <Form.Button>Post Response!</Form.Button>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl