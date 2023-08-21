import { useEffect, useState } from "react"

export const useFetch = (url)=>{
const[data, setData]=useState(null);
const[loading, setLoading]=useState(true);
const[error, setError]=useState("");

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_API_KEY
    }
  };
  
  

useEffect(()=>{
    getData();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
const getData = async ()=>{
    setLoading(true)
    try {
        const response = await fetch(url, options)
        if(!response.ok){setError("Nie udało się pobrać danych")}
        const result = await response.json()
        setData(result)
    } catch (error) {
        setError(error)
    }finally {
        setLoading(false)
    }
}

return {data,loading,error}
}