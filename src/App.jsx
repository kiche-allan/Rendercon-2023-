
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index.jsx";

function App() {
  const counter = useSelector(state => state.counter)
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h2>Counter {counter} </h2>  
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      
      {isLoggedIn ? <h3> Log In to See</h3> : ''}
    </div>
  )
}

export default App