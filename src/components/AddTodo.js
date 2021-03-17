import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListIcon from '@material-ui/icons/List';
import TodayIcon from '@material-ui/icons/Today';
import Input from '@material-ui/core/Input' 
import {useForm} from 'react-hook-form'

const style={
    common: {
        padding: '10px'
    }
}

function AddTodo(props) {
    
    const {register,errors,handleSubmit}=useForm()
    const { addTodoList } = props
    const onSubmission = e  => {
       const date = new Date(`${e.target['date'].value} 00:00`)
        
         e.preventDefault()
        const todoObj = {
            Task: e.target['task'].value,
            Description: e.target['description'].value,
            Date: date,
            checked: false

           
        }

        addTodoList(todoObj)
    } 

// const onSubmission= value=>{

//     console.log(value)
//     // const todoObj = {
       
//     //     // Task:value.email,
//     //     // Description:value.description,
//     //     // Date: new Date(`${value.date} 00:00`),
//     //     // checked: false
       
//     // }

//    // addTodoList(todoObj)


// }
console.log(errors)
    return (
        <div style={{background:'#eda005'}}>
            
            <form onSubmit={(e)=>handleSubmit(onSubmission(e))}>
            {/* <form onSubmit={handleSubmit(onSubmission)}> */}
                <div style={style.common} >
                    <label> Task <AssignmentIcon/> :</label>
                    <input type='text' name='task' placeholder='Task' ref={register({required:{value:true,message:'please Enter Task'}})} />
                    {errors.task && (<span style={{color:'red'}}> {errors.task.message}</span>)}
                </div>
                <div style={style.common}>
                    <label> Description <ListIcon/> :</label>
                    <input type='text' name='description' placeholder='description' ref={register({required:{value:true,message:'please Enter Description'}})} />
                    {errors.description && (<span style={{color:'red'}}> {errors.description.message}</span>)}
                </div>
                <div style={style.common}>
                    <label>Date <TodayIcon/>:</label>
                    <input type='date' name='date' ref={register({required:{value:true,message:'please Select Date'}})} />
                    {errors.date && (<span style={{color:'red'}}> {errors.date.message}</span>)}
                </div>
                <div style={style.common}>
                    <Button variant="contained" color="default" color="primary" startIcon={<AddIcon />} type='submit'> Add </Button>

                </div>
            </form>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addTodoList: val => dispatch({ type: 'ADD_TODO', payload: val })
})

export default connect(null, mapDispatchToProps)(AddTodo)