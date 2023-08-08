import React from 'react'
import MainTemplates from '../templetaes/MainTemplates'
import { useParams} from "react-router-dom"
import MainCardSeriesDetails from '../components/MainCardSeriesDetails';
import { Box, Flex} from '@chakra-ui/react';
import CrewDetailsFilm from '../components/CrewDetailsFilm'
import TabSeries from'../components/TabSeries'

const DetalisSeriesPage = () => {
  let { movieid } = useParams();
  return (
    <div>
    <MainTemplates>
      <MainCardSeriesDetails movieid={movieid}/>
      
      <Flex justify="space-between">
          <Box w="100%" >
            
              <CrewDetailsFilm movieid={movieid} series="true" />
              
             <TabSeries movieid={movieid} /> 
          </Box>
          </Flex>

    </MainTemplates>
    </div>
  )
}

export default DetalisSeriesPage