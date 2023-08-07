import React from 'react'
import MainTemplates from '../templetaes/MainTemplates'
import { ChakraProvider } from '@chakra-ui/react';

import MovieCard from '../components/MovieCard';


const MoviePage = () => {



  return (
    <div>

    <MainTemplates>


      <ChakraProvider>
      <MovieCard />

    </ChakraProvider>
        


    </MainTemplates>
    </div>
  )
}

export default MoviePage