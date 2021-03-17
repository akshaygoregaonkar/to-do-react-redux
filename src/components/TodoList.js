import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';

function TodoList(props) {
//    console.log( props.listOfTodo)
const{listOfTodo,delteTask,checked,email}=props
const DeleteItem= index=>{
    delteTask(index)
}
const handleChecked= index=>{
    checked(index)
}

    return (
        <div style={{textAlign:'center',background:'#99e810'}}>
            <div><h1>List Of Todo</h1></div>
            <div style={{textAlign:'left'}}>
                <h2> <EmailIcon/>:{email}</h2>
            </div>


            
            {listOfTodo &&
                <div style={{border:'2px solid black',padding:'10px'}}>

                    
                    {listOfTodo.map((item, index) =>

                    <li style={listOfTodo[index].Date < new Date() ? { border: '5px solid yellow', padding:'5px' } : {}} key={index}>  
                    <input type="checkbox" checked={item.checked} onChange={()=> { handleChecked(index) }} />  <span style={item.checked ? { textDecorationLine: "line-through" } : {}}> {`Task Name: ${item.Task}, Details: ${item.Description}, planned completion: ${item.Date}`}</span>
                    
                    <Button  onClick={() => DeleteItem(index)} variant="contained"  color="primary"   type='submit'><DeleteIcon/>  </Button>

                    {listOfTodo[index].Date < new Date() ? <div style={{ color: 'red' }}> Due day is passed</div> : <></>}
                     </li>
                    )}

                </div>}

        </div>
    )
}


const mapStateToProps = state => ({ listOfTodo:state.listOfTodo
,email:state.authentication.email})
const mapDispatchToProps=dispatch=>({
    delteTask:index=>dispatch({type:'DELETE_TASK',payload:index}),
    checked: index=>dispatch({type:'CHECKED_TASK',payload:index})
})


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)