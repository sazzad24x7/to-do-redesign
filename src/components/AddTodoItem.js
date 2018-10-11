import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addTodoItem} from '../actions/index';
import { InputFieldBasic } from '../ui/Form';
import { AppButtonOnlyIcon } from '../ui/Button'

class AddTodoItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: null,
            text: "",
            colorBlock: "",
            completion: false,
            isInputFieldShow: false
        };

    }


    onChangeHandler = (e) => this.setState({text: e.target.value});

    onBlurHandler = () => {
        let todo = null;
        if(this.state.text == ''){
            alert('From Field Should Not Empty');
        }else{
            todo = {
                id: Date.now,
                text: this.state.text,
                colorBlock: "",
                completion: false
            }
            this.props.addTodoItem(todo);
            this.setState({
                isInputFieldShow: false,
                text: ""
            })
        }
    }

    onKeyPressHandler = (e) => {
        let todo = null;
        if(e.key == "Enter"){
            if(this.state.text == ''){
                alert('From Field Should Not Empty');
            }
            todo = {
                id: Date.now(),
                text: this.state.text,
                colorBlock: "",
                completion: false
            }
            this.props.addTodoItem(todo);
            this.setState({
                isInputFieldShow: false,
                text: ""
            })
        }
    }

    showInputFieldHandler = () => {
        this.setState({
            isInputFieldShow: true,
        })
    }

    blockShowFunction = () => {
        let inputBlock = (<InputFieldBasic 
            InputFieldPlaceholder = "Add Todo Here..."
            InputFieldSize = "massive"
            InputFieldValue = {this.state.text}
            InputFieldOnChangeHandler = {this.onChangeHandler}
            InputFieldOnBlurHandler = {this.onBlurHandler}
            InputFieldOnKeyPressHandler = {this.onKeyPressHandler}
            />);

        let buttonBlock = (<AppButtonOnlyIcon
            btnSize = "massive"
            showInputField = {this.showInputFieldHandler}
            btnColor = "blue"
            />);

           return(
            this.state.isInputFieldShow ? inputBlock  : buttonBlock  
           );
    }


    render(){
       

        return(
            <div>
                {this.blockShowFunction()}
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return{
        addTodoItem: todo => dispatch(addTodoItem(todo))
    }
}

export default connect(null, mapDispatchToProps)(AddTodoItem);