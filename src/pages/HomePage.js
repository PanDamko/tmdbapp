import React  from 'react'
import MainTemplates from '../templetaes/MainTemplates'

import {  Text, Box, Center} from '@chakra-ui/react'
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
 //const popularpeople = useFetch('https://api.themoviedb.org/3/person/popular')
  return (
    <div>
      <MainTemplates>
        <Center>
      <Box borderRadius="5%" background='url(https://i.pravatar.cc/300) center/cover no-repeat' w="80%" >
        <Box display='flex' alignItems='center' flexDirection="column"><Text>Witamy na naszej stronie.</Text>
      <SearchResults />
</Box>
        </Box></Center>
       <Center><Text fontSize='2xl'> Popularne filmy</Text></Center>
       <Box color='gray.50'  >{popularFilms.loading ? <Center><Text fontSize='2xl'> Loading...</Text></Center>: <Responsive item={popularFilms}/>}</Box>
       <Center><Text fontSize='2xl'> Popularne seriale</Text></Center>
        <Box color='gray.50'  >{popularSerials.loading ? <Center><Text fontSize='2xl'> Loading...</Text></Center>: <Responsive item={popularSerials}/>}</Box>
       <Center><Text fontSize='2xl'> Trending</Text></Center>
       <Box color='gray.50'  >{trending.loading ? <Center><Text fontSize='2xl'> Loading...</Text></Center>: <Responsive item={trending}/>}</Box>
       <Center><Text fontSize='2xl'>Nadchodzące filmy</Text></Center>
       <Box color='gray.50'  >{upcoming.loading ? <Center><Text fontSize='2xl'> Loading...</Text></Center>: <Responsive item={upcoming}/>}</Box>
       <Center><Text fontSize='2xl'>Najlepiej oceniane filmy</Text></Center>
       <Box color='gray.50'  >{topRated.loading ? <Center><Text fontSize='2xl'> Loading...</Text></Center>: <Responsive item={topRated}/>}</Box>
       <Center><Text fontSize='2xl'>Najlepiej oceniane seriale</Text></Center>
       <Box color='gray.50'  >{topRatedseries.loading ? <Center><Text fontSize='2xl'> Loading...</Text></Center>: <Responsive item={topRatedseries}/>}</Box>
       {/* <Center><Text fontSize='2xl'>Popularne osoby</Text></Center>
       <Box color='gray.50'  >{popularpeople.loading ? <Center><Text fontSize='2xl'> Loading...</Text></Center>: <Responsive item={popularpeople}/>}</Box> */}



      </MainTemplates>
    </div>
  )
}

export default HomePage