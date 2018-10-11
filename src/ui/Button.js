import React from 'react'
import { Button } from 'semantic-ui-react'
import AppIcon from './../ui/Icon';

const AppButton = (props) => (<Button  
 size = {props.btnSize} 
 color={props.btnColor}
  onClick ={() => props.clickAction()}>
 {props.name}
 </Button>)

 export const AppButtonOnlyIcon = (props) => (<Button 
    circular
    color = {props.btnColor}
    size = {props.btnSize}
    onClick ={() => props.showInputField()}
    icon='add'></Button>)
export default AppButton;