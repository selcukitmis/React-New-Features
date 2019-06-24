import React,{ useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



const App = (props) => { 
  const [count,setCount] = useState(props.count)
  const [text,setText] = useState('')
  const [state,setState] = useState({ count : props.count, text : props.text })
  useEffect(() => {
    console.log("Here will run when count changes")
    document.title = count
  },[count])

  useEffect(() => {
    console.log("Here will run once!")
    document.title = count
  },[])


   return(
     <div>
       <p>Current {text} is { count }</p>
       <button onClick={ () => { setCount( count + 1 ) } }>Increment +1</button><br />
       <button onClick={ () => { setCount( count - 1 ) } }>Increment -1</button><br />
       <button onClick={ () => { setCount(props.count) } }>Reset</button><br />
       <input value={text} onChange={ (e) => { setText(e.target.value) } } />
     </div>
   )
 }

/*const App = (props) => { 
 const [count, setCount] =  useState(props.count)
 const [text, setText] =  useState(props.text)
  return(
    <div>
      <p>Current {text} is { count }</p>
      <button onClick={ () => { setCount(count + 1) } }>Increment +1</button><br />
      <button onClick={ () => { setCount(count - 1) } }>Increment -1</button><br />
      <button onClick={ () => { setCount(props.count) } }>Reset</button><br />
      <input value={text} onChange={ (e) => { setText(e.target.value) } } />
    </div>
  )
}*/

App.defaultProps = {
  count : 10,
  text : "count"
}

export default App