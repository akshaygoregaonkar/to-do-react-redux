import TodoApp from "./components/TodoApp";
 import {createStore} from 'redux'
 import {Provider} from 'react-redux'

import reducer from './Reducer/reducer'
import {BrowserRouter } from 'react-router-dom'
;
import StagingArea from "./StagingArea";


 const initialVal={
  listOfTodo:[],
  authentication:{}
}
 const store=createStore( reducer,initialVal)


function App() {
  return (
    <div > 
    <Provider store={store}>
    <BrowserRouter>
      <StagingArea/>
    {/* <TodoApp/> */}
    </BrowserRouter >
    </Provider>
   

    </div>
  );
}

export default App;
