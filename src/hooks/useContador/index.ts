import { useState } from "react";

export const useContador = (initialValue: number) => {
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

