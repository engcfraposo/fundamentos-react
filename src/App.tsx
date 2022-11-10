import { Component, Fragment, ReactNode, useState } from 'react'
import './App.css'


const useContador = (initialValue: number) => {
  const [state, setState] = useState<number>(initialValue)
  const handleCount = (type: string) => {
    if(type === "+"){
      setState(pCount => pCount + 1); 
      return
    }
    setState(pCount => pCount - 1); 
  }
  return { state, handleCount }
}

function Contador() {  
  const { state: count, handleCount } = useContador(0);
  return (
    <Fragment>
      <h1>Contador</h1>
      <button onClick={
        (e) => handleCount("-")} >-</button>
        <h1>{count}</h1>
      <button onClick={(e) => handleCount("+")} >+</button>
    </Fragment>
  )
}

const Contador2 = () => {
  const { state: count, handleCount } = useContador(0);
  return (
    <Fragment>
      <h1>Contador</h1>
      <button onClick={
        (e) => handleCount("-")} >-</button>
        <h1>{count}</h1>
      <button onClick={(e) => handleCount("+")} >+</button>
    </Fragment>
  )
}

/**class ContadorClass extends Component {
  constructor(props){
    super(props);
    this.state = { count: 0 }
  }
  handleCount(type: string){
    if(type === "+"){
      this.setState(state =>({ 
        count: state.count + 1
      }))
      return
    }
    this.setState(state =>({ 
      count: state.count - 1
    }))
  }
  render(): ReactNode {
    return(
      <Fragment>
      <h1>Contador {this.props.name}</h1>
      <button onClick={
        (e) => this.handleCount("-")} >-</button>
        <h1>{this.state.count}</h1>
      <button onClick={(e) => this.handleCount("+")} >+</button>
    </Fragment>
    )
  }
} **/


function App() {
  return(
    <Fragment>
      <Contador />
      <Contador2 />
    </Fragment>
  )
}


export default App
