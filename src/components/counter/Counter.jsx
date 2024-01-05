import { useSelector, useDispatch } from "react-redux"
import "./Counter.css"
import { DEC, INC, RST } from "../../store/counterReducer"


const Counter = () => {
  const count = useSelector((state) => state.count)
  const disPatch = useDispatch()
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button className="counter-button positive"
          onClick={() => disPatch({ type: "INC" })}>increase</button>
        <button className="counter-button zero"
          onClick={() => disPatch({ type: "RST" })}>reset</button>
        <button className="counter-button negative"
          onClick={() => disPatch({ type: "DEC" })}>decrease</button>
      </div>
    </div>
  )
}

export default Counter
