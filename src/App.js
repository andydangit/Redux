import { useSelector } from 'react-redux'

import './App.css';

function App() {

const state = useSelector((state) => state)

console.log(state);

  return (
    <div className="App">
Redux 
    </div>
  );
}

export default App;
