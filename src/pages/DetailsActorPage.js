import React from 'react'
import { useParams} from "react-router-dom"
import { Box, Flex, } from '@chakra-ui/react'
import MainTemplates from '../templetaes/MainTemplates';

const DetailsActorPage = () => {

  let { actorid } = useParams();

 
  
  return (
    <div>
      <MainTemplates>
   aktor {actorid}
    </MainTemplates>

    </div >
  )
}

export default DetailsActorPage