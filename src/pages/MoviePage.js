import React from 'react'
import MainTemplates from '../templetaes/MainTemplates'
import { useFetch } from '../components/UseFetch'
import { ChakraProvider } from '@chakra-ui/react';
import {
  Box,
  Flex,
 Text,
  Select,
} from '@chakra-ui/react';
import Responsive from '../components/Responsive';
import MovieCard from '../components/MovieCard';

const MoviePage = () => {

  const popularFilms = useFetch('https://api.themoviedb.org/3/movie/popular');



console.log(popularFilms);

  return (
    <div>
    <MainTemplates>
    <Box color='gray.50'  >{popularFilms.loading ? <h1> Loading...</h1>: <Responsive item={popularFilms}/>}</Box>


    <Flex height="100vh">
      <Box p="4" width="20%" bg="gray.200">
     <Text >Popularne Filmy </Text>
        <Select placeholder="Select an option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>


        <Text >Sortuj </Text>
        <Select placeholder="Select an option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <Text >Cos tam </Text>
        <Select placeholder="Select an option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>

      <Box p="4" width="80%" bg="gray.100" textAlign="center">
      <ChakraProvider>
      <MovieCard />
    </ChakraProvider>
        
       


      </Box>
      



    </Flex>



    </MainTemplates>
    </div>
  )
}

export default MoviePage