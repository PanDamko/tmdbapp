import React from 'react'
import MainTemplates from '../templetaes/MainTemplates'
import { Icon, TabPanel, TabPanels, Tabs, Box, Image, Text, Button, Link, VStack } from '@chakra-ui/react';
import { FaPlayCircle } from 'react-icons/fa';

const MoviePage = () => {
  const movieData = {
    title: 'Naznaczony: Czerwone drzwi (2023)',
    releaseDate: '07.07.2023 (PL)',
    genres: 'Horror, Tajemnica, Thriller',
    duration: '1h 47m',
    description:
      'To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family\'s dark past and a host of new and more horrifying terrors that lurk behind the red door.',
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg',
    trailerLink: 'https://youtu.be/vkdu5DB6vRk',
    rating: '7.5',
    director: 'Leigh Whannell',
    screenplay: 'Scott Teems',
    bgImage: 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/i2GVEvltEu3BXn5crBSxgKuTaca.jpg',
  };


  const panelStyles = {
    p: '1em',
  };

  return (
    <div>
    <MainTemplates>
    <Box  
          color="white"
          backgroundSize="cover"
          backgroundPosition="center"
          minHeight="50vh"
          backgroundImage={`url(${movieData.bgImage})`}
          
      >
     <Tabs isFitted variant="enclosed">
      <TabPanels>
        <TabPanel {...panelStyles}>
          <Box display="flex">
            <Image src={movieData.poster} alt="Movie Poster" w="200px" h="300px" mr="1em" />
            <Box>
              <Text fontSize="2xl" fontWeight="bold" mb="0.5em">
                {movieData.title}
              </Text>
              <Text fontSize="md" fontWeight="semibold" mb="0.5em">
                {movieData.releaseDate} ({movieData.genres}) {movieData.duration}
              </Text>
              <Text fontSize="2xl" fontWeight="bold" mb="0.5em">
            Czy odważysz się wejść?
          </Text>
              <Text>{movieData.description}</Text>

          
              <VStack align="start" mt="1em">
                <Text fontSize="lg" fontWeight="bold">
                  Ocena użytkowników
                </Text>
                <Text fontSize="md" fontWeight="semibold">
                  {movieData.rating}
                </Text>
                <Text fontSize="lg" fontWeight="bold">
                  Odtwarzaj zwiastun
                </Text>
                <Button 
                as={Link} 
                href={movieData.trailerLink} 
                colorScheme="blue" 
                target="_blank"
                leftIcon={<Icon as={FaPlayCircle} boxSize={20} />}>
                  Watch Trailer
                </Button>
              </VStack>
            </Box>
          </Box>
        </TabPanel>
       
          
          <Text fontSize="lg" fontWeight="bold" mt="1em">
            Leigh Whannell
          </Text>
          <Text fontSize="md" fontWeight="semibold">
            Characters, Story
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            Patrick Wilson
          </Text>
          <Text fontSize="md" fontWeight="semibold">
            Director
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            Scott Teems
          </Text>
          <Text fontSize="md" fontWeight="semibold">
            Screenplay
          </Text>
      </TabPanels>
    </Tabs>
    </Box>
    </MainTemplates>
    </div>
  )
}

export default MoviePage