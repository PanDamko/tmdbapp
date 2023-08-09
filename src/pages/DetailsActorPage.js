import React from 'react'
import { useParams} from "react-router-dom"
import { Box, Text, Flex, Image, ChakraProvider, VStack, Spinner} from '@chakra-ui/react';
import MainTemplates from '../templetaes/MainTemplates';
import { FetchPromise } from '../components/FetchPromise';
import CrewDetailsActor from '../components/CrewDetailsActor';

const DetailsActorPage = () => {

  let { actorid } = useParams();
  
  const alldata = FetchPromise (`https://api.themoviedb.org/3/person/${actorid}?language=PL`,`https://api.themoviedb.org/3/person/${actorid}/movie_credits?language=PL`)

console.log(alldata);
  return (
    <div>
      <MainTemplates>
     { alldata === undefined ? <Spinner /> : 
     <ChakraProvider>
      <Box p={4} borderWidth="1px" borderRadius="lg" maxW="400px">
        <Image src={`https://image.tmdb.org/t/p/w300${alldata[0].profile_path}`} alt={`${alldata[0].name}'s photo`} />
        <Text mt={2} fontWeight="bold" fontSize="xl">
          {alldata[0].name}
        </Text>
        </Box>
        <Box p={4}>
        <Text mt={2}>{alldata[0].biography}</Text>
        <VStack align="left" mt={4}>
          <Text>Płeć: {alldata[0].gender === 1 ? 'Kobieta' : 'Mężczyzna'}</Text>
          <Text>Data urodzenia: {alldata[0].birthday}</Text>
          <Text>Miejsce urodzenia: {alldata[0].place_of_birth}</Text>
          <Text>{alldata[0].gender === 1 ? 'Znana' : 'Znany'} jako: {alldata[0].name}</Text>
        </VStack>
        <Text> {alldata[0].gender === 1 ? 'Znana' : 'Znany'} z : </Text>
        <Flex justify="space-between">
          <Box w="70%" >
            <Box>
        <CrewDetailsActor actorid={actorid} />
        </Box>
        </Box>
        </Flex>
      </Box>
    </ChakraProvider>
     }
    </MainTemplates>




   

    </div >
  )
}

export default DetailsActorPage