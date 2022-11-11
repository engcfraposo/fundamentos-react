import { ComponentProps, Fragment, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import { useContador } from "../../hooks/useContador";

export function ContadorFunction(props: any) {  
    const { state: count, handleCount } = useContador(0);
    return (
      <Fragment>
        <h1>Contador {props?.name}</h1>
        <button onClick={
          (e) => handleCount("-")} >-</button>
          <h1>{count}</h1>
        <button onClick={(e) => handleCount("+")} >+</button>
      </Fragment>
    )
}