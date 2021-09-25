import { useSelector, useDispatch } from 'react-redux'
import {bindActionCreators } from 'redux'
import {} from './state/'
import { actionCreators } from './state/index'

function App() {

const account = useSelector((state) => state.account);

const dispatch = useDispatch()

console.log(account);

  return (
    <div className="App">
Redux 
    </div>
  );
}

export default App;
