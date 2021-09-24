import { useSelector } from 'react-redux'

import './App.css';

function App() {

const account = useSelector((state) => state.account)

console.log(account);

  return (
    <div className="App">
Redux 
    </div>
  );
}

export default App;
