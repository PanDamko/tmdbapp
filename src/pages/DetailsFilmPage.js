import React from 'react'
import { useParams} from "react-router-dom"
import { Box,  Container, } from '@chakra-ui/react'
import MainTemplates from '../templetaes/MainTemplates';


import MainCardFilmDetails from '../components/MainCardFilmDetails';
import TabFilms from '../components/TabFilms';
import SliderFilms from '../components/SliderFilms';
const Details = () => {

  let { movieid } = useParams();

 
  
  return (
    <div>
      <MainTemplates>
      <MainCardFilmDetails movieid={movieid}/>
        <Container>
        <Box>
          <Box w="70%" >
            <Box>
              <SliderFilms movieid={movieid} />
            </Box>
            <Box><h1>Media</h1></Box>
             <TabFilms movieid={movieid} />
          </Box>
          <Box w="30%" ><h1>boczne menu</h1></Box>
        </Box>
        </Container>
    </MainTemplates>

    </div >
  )
}

export default Details