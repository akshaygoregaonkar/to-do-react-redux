import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import ErrorBoundary from './ErrorBoundry'
import Header from './Header'
import TodoList from './TodoList'
import VisiblityFilters from './VisiblityFilters'
// import {BrowserRouter,Switch,Route} from 'react-router-dom'

 


function TodoApp(props){
    const{authSucess}=props
    useEffect(()=>{
        if(authSucess===null){
        props.history.push('/login')
        }

    },[authSucess])

    console.log(props)
    return(
    <div >
       <ErrorBoundary>
      
    <Header/>
    
        <div style={{margin:'10px',padding:'5px',textAlign:'center'}}>
        <AddTodo/>
        </div>
        <div style={{margin:'10x',padding:'5px'}}>
        <TodoList/>
        </div>

        <div style={{margin:'10px',padding:'5px'}}>
       

        <VisiblityFilters/>
       
        </div>

        </ErrorBoundary>
    </div>
    )
}
const mapStateToProps =state=>({
    authSucess:state.authentication.tokenId})

export default connect(mapStateToProps)(TodoApp)