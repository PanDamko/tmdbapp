import React from 'react'
import { useParams} from "react-router-dom"
import { Box, Flex, } from '@chakra-ui/react'
import MainTemplates from '../templetaes/MainTemplates';
import RightMenu from '../components/RightMenu'

import MainCardFilmDetails from '../components/MainCardFilmDetails';
import TabFilms from '../components/TabFilms';

import CrewDetailsFilm from '../components/CrewDetailsFilm';
const Details = () => {

  let { movieid } = useParams();

 
  
  return (
    <div>
      <MainTemplates>
      <MainCardFilmDetails movieid={movieid}/>
       
        <Flex justify="space-between">
          <Box w="70%" >
            <Box>
              <CrewDetailsFilm movieid={movieid} />
            </Box>
             <TabFilms movieid={movieid} />
          </Box>
          <Box w="25%" ><RightMenu movieid={movieid}/></Box>
          </Flex>
        
    </MainTemplates>

    </div >
  )
}

export default Details