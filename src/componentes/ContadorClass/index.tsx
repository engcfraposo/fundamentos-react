import { Component, Fragment, ReactNode } from "react";

export class ContadorClass extends Component {
    constructor(props: {} | Readonly<{}>){
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
  } 
  