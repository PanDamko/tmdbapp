import React from 'react'
import {useParams} from "react-router-dom"
import {Text} from '@chakra-ui/react'
const Details = () => {
  
  let  {movieid}  = useParams();
  console.log(movieid);
  
  return (
    <div>
      <Text>CardFilmsSerials</Text>
      <Text>{movieid}</Text>

      </div>
  )
}

export default Details