import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTodoItem } from '../actions/index';
import { AppButtonOnlyIcon } from '../ui/Button';
import { InputFieldBasic } from '../ui/Form';

class EditTodoItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: null,
            text: this.props.editTodo.text,
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
                id: this.props.editTodo.id,
                text: this.state.text,
                colorBlock: "",
                completion: false
            }
            this.props.editTodoItem(todo);
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
                id: this.props.editTodo.id,
                text: this.state.text,
                colorBlock: "",
                completion: false
            }
            this.props.editTodoItem(todo);
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

    editInputFieldBlock = (props) => {
        return (<InputFieldBasic 
            InputFieldPlaceholder = "Add Todo Here..."
            InputFieldSize = "massive"
            InputFieldValue = {this.state.text}
            InputFieldOnChangeHandler = {this.onChangeHandler}
            InputFieldOnBlurHandler = {this.onBlurHandler}
            InputFieldOnKeyPressHandler = {this.onKeyPressHandler}
            />);
    }

    editButtonBlock = () => {

        return(<AppButtonOnlyIcon
            btnIcon = "edit"
            btnSize = "massive"
            onClickEvent = {this.showInputFieldHandler}
            btnColor = "yellow"
            />);
    }

    render(){
        return(
        <div>
            {this.state.isInputFieldShow ? this.editInputFieldBlock() : this.editButtonBlock()}
        </div>);
        
    }
}
const mapDispatchToProps = dispatch => {
    return{
        editTodoItem: todo => dispatch(editTodoItem(todo))
    }
}

export default connect(null,mapDispatchToProps)(EditTodoItem);