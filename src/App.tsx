import { Fragment } from 'react'
import './App.css'
import { ContadorArrow } from './componentes/ContadorArrow';
import { ContadorClass } from './componentes/ContadorClass';
import { ContadorFunction } from './componentes/ContadorFunction';
import { useCEP } from './hooks/useCEP';

/*
function App() {
  return(
    <Fragment>
      <ContadorFunction name="função" />
      {ContadorFunction({ name: "função"})}
      <ContadorArrow name="arrow" />
      {ContadorArrow({ name: "arrow"})}
      <ContadorClass name="class" />
    </Fragment>
  )
}
*/

const Log = (props: any) => <h1>{props?.logradouro}</h1>

function App() {
  const data = useCEP({cep:'50721260'});
  return(
    <Fragment>
      <Log logradouro={data?.logradouro}/>
    </Fragment>
  )
}


export default App
