import React from 'react'
import {Input, Button, Checkbox, Form } from 'semantic-ui-react'

const AppForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export const InputFieldBasic = (props) =>(<Input
      placeholder={props.InputFieldPlaceholder}
      size = {props.InputFieldSize}
      value = {props.InputFieldValue}
      onChange = {props.InputFieldOnChangeHandler}
      onBlur = {props.InputFieldOnBlurHandler}
      onKeyPress = {props.InputFieldOnKeyPressHandler}

/>)

export default AppForm;