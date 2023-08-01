import { useEffect, useState } from "react"

export const useFetch = (url)=>{
const[data, setData]=useState(null);
const[loading, setLoading]=useState(true);
const[error, setError]=useState("");

useEffect(()=>{
    getData();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
const getData = async ()=>{
    setLoading(true)
    try {
        const response = await fetch(url)
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