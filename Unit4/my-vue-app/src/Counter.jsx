import { useState } from "react"
export default function Counter(props){
	let [icount,setCount] = useState(props.count)
	return(
		<>
		<h3>COUNT:{icount}</h3>
		<button onClick={()=>{setCount(icount+1)}}>Increment</button>
		<button disabled={icount==0} onClick={()=>{setCount(icount-1)}}>Decrement</button>
		</>
	)
}