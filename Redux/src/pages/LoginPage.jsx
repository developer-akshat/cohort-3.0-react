import { decrement, increament, incrementbyValue } from "../features/CounterSlice"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const LoginPage = () => {
  let dispatch = useDispatch()
  let {count} = useSelector((store)=> store.counter)
  const [inpValue, setinpValue] = useState(0)

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <button onClick={()=> dispatch(increament())}>Increment</button> <br /><br />
      <input type="text" placeholder='Enter value' onChange={(e)=> setinpValue(e.target.value)} />
      <button onClick={()=> dispatch(incrementbyValue(inpValue))}>Add to count</button>
    </div>
  )
}

export default LoginPage

