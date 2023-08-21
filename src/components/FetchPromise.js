import { useEffect, useState } from "react"

export const FetchPromise = (...rest)=>{
    const[alldata,setAlldata] = useState(); 
    
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_API_KEY
    }
  };
  const getData = async (url)=>{
    const response = await fetch(url, options)
    const result = await response.json()
    return result
}
useEffect(()=>{
    (async function() {
           const datas = rest.map((x)=>getData(x))
            
            const data=await Promise.all(datas)
            setAlldata(data)
            
            
    })()
},[])

return alldata
}