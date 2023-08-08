import React from 'react'
import MainTemplates from '../templetaes/MainTemplates'

import { Text, Box, Center, Spinner, Image, Flex } from '@chakra-ui/react'
import Responsive from '../components/Responsive'
import { useFetch } from '../components/UseFetch'
import SearchResults from '../components/SearchResults';
const HomePage = () => {

  const popularFilms = useFetch('https://api.themoviedb.org/3/movie/popular');
  const popularSerials = useFetch('https://api.themoviedb.org/3/tv/top_rated')
  const trending = useFetch('https://api.themoviedb.org/3/trending/movie/day')
  const upcoming = useFetch('https://api.themoviedb.org/3/movie/now_playing')
  const topRated = useFetch('https://api.themoviedb.org/3/movie/top_rated')
  const topRatedseries = useFetch('https://api.themoviedb.org/3/tv/top_rated')
  //const popularpeople = useFetch('https://api.themoviedb.org/3/person/popular') background={bckh}
  let bckh = "";
  popularFilms.loading ? bckh = "" : bckh = `url(https://image.tmdb.org/t/p/original/${popularFilms.data.results[Math.floor(Math.random() * 10)].poster_path}) center/cover no-repeat`
 
  return (
    <div>
      <MainTemplates>
        <Center>
          <Box background={bckh} filter="grayscale(95%)" objectFit="cover" width='200vh' height="50vh"  >
           <Flex direction="column"   align="center" justify="flex-end" height="50vh"> 
           
            <Box filter="none" display='flex' alignItems='center' flexDirection="column"><Text fontWeight='bold' fontSize='4xl' color="white" >Witamy na naszej stronie.</Text>
              <SearchResults />
            </Box>
            </Flex>
          </Box>
        </Center>
        <Center><Text fontSize='2xl'> Popularne filmy</Text></Center>
        <Box color='gray.50'  >{popularFilms.loading ? <Center><Text fontSize='2xl'> <Spinner /></Text></Center> : <Responsive item={popularFilms} />}</Box>
        <Image src={bckh} />
        <Center><Text fontSize='2xl'> Popularne seriale</Text></Center>
        <Box color='gray.50'  >{popularSerials.loading ? <Center><Text fontSize='2xl'> <Spinner /></Text></Center> : <Responsive item={popularSerials} series="true" />}</Box>
        <Center><Text fontSize='2xl'> Trending</Text></Center>
        <Box color='gray.50'  >{trending.loading ? <Center><Text fontSize='2xl'> <Spinner /></Text></Center> : <Responsive item={trending} />}</Box>
        <Center><Text fontSize='2xl'>Nadchodzące filmy</Text></Center>
        <Box color='gray.50'  >{upcoming.loading ? <Center><Text fontSize='2xl'> <Spinner /></Text></Center> : <Responsive item={upcoming} />}</Box>
        <Center><Text fontSize='2xl'>Najlepiej oceniane filmy</Text></Center>
        <Box color='gray.50'  >{topRated.loading ? <Center><Text fontSize='2xl'> <Spinner /></Text></Center> : <Responsive item={topRated} />}</Box>
        <Center><Text fontSize='2xl'>Najlepiej oceniane seriale</Text></Center>
        <Box color='gray.50'  >{topRatedseries.loading ? <Center><Text fontSize='2xl'> <Spinner /></Text></Center> : <Responsive item={topRatedseries} series="true" />}</Box>
        {/* <Center><Text fontSize='2xl'>Popularne osoby</Text></Center>
       <Box color='gray.50'  >{popularpeople.loading ? <Center><Text fontSize='2xl'> Loading...</Text></Center>: <Responsive item={popularpeople}/>}</Box> */}



      </MainTemplates>
    </div>
  )
}

export default HomePage