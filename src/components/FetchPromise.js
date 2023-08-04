import { useEffect, useState } from "react"

export const FetchPromise = (...rest)=>{
    const[alldata,setAlldata] = useState(); 
    
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2E1NWJmMTVmYzg0MDY4ZGQyZmQ4ZTJhY2Y0ZGYwMSIsInN1YiI6IjY0YzdmMzJiNjNlNmZiMDEzOGRhYzI4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kDgzzi2emOUKdMPAkIwFZEWX8fzVBPj2VLVafzjXfDg'
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