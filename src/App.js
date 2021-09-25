import { useSelector, useDispatch } from 'react-redux'
import {bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

function App() {

const account = useSelector((state) => state.account);

const dispatch = useDispatch();

const AC = bindActionCreators(actionCreators, dispatch)

console.log(AC);

console.log(account);

  return (
    <div className="App">
Redux 
    </div>
  );
}

export default App;
