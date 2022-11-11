import React, { useEffect, useState } from 'react';

export const useCEP = (props: {cep: string}) => {
  const [data, setData] = useState()
  useEffect(()=> {
    fetch(`https://viacep.com.br/ws/${props.cep}/json/`)
    .then(response => response.json())
    .then(data => setData(data))
  }, [])
  return data;
}