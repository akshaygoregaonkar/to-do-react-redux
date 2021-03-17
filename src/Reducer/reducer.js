import Action from '../Action/Action'
function reducer(state = {}, action) {
    switch (action.type) {
        case Action.ADD_TODO: {

            return { ...state, listOfTodo: [...state.listOfTodo, action.payload] }
        }
        case Action.DELETE_TASK: {
            return { ...state, listOfTodo: [...state.listOfTodo.slice(0, action.payload), ...state.listOfTodo.slice(action.payload + 1)] }
        }
        case Action.CHECKED_TASK: {
            return { ...state, listOfTodo: [...state.listOfTodo.slice(0, action.payload), { ...state.listOfTodo[action.payload], checked: !state.listOfTodo[action.payload].checked }, ...state.listOfTodo.slice(action.payload + 1)] }
        }

        case Action.AUTH_SUCCESS: {
            const { idToken, expiresIn,email} = action.payload
     console.log(email)
            const authState = {
                email:email,
                tokenId: idToken,
                expirationDate: new Date(new Date().getTime() + (expiresIn * 1000))
            }
            localStorage.setItem('tokenId', authState.tokenId)
            localStorage.setItem('expirationDate', authState.expirationDate)
            localStorage.setItem('email',authState.email)
            return { ...state, authentication: authState }
        }
        case Action.AUTH_INITIATE:{
            console.log("auth initiate")
            const authState={
                tokenId:localStorage.getItem('tokenId'),
                expirationDate:localStorage.getItem('expirationDate'),
                email:localStorage.getItem('email')
            }
             console.log(authState)
            if(authState.tokenId){
                const currentDate=new Date()
                if(currentDate > authState.expirationDate){
                localStorage.clear()
                } 
                return currentDate >authState.expirationDate ? {...state,authentication:{tokenId:null,expirationDate:null,email:null}}:{...state,authentication:authState}
            }
            return {...state,authentication:authState}
        }
        case Action.LOG_OUT:{
            console.log('loggg out')
            localStorage.clear()
            return{...state,authentication:{tokenId:null,expirationDate:null,email:null}}
        }
        default:
            return state

    }
}
export default reducer