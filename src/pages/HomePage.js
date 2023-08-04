import React  from 'react'
import MainTemplates from '../templetaes/MainTemplates'

import { Input, Text, Box, Center} from '@chakra-ui/react'
import Responsive from '../components/Responsive'
import { useFetch } from '../components/UseFetch'

const HomePage = () => {
  
  const popularFilms = useFetch('https://api.themoviedb.org/3/movie/popular');
  const popularSerials = useFetch('https://api.themoviedb.org/3/tv/top_rated')
  const trending = useFetch('https://api.themoviedb.org/3/trending/movie/day')

  return (
    <div>
      <MainTemplates>
        <Center>
      <Box borderRadius="5%" background='url(https://i.pravatar.cc/300) center/cover no-repeat' w="80" >
        <Box display='flex' alignItems='center' flexDirection="column"><Text>Witamy na naszej stronie.</Text>
        <Input w="50%" size='md' placeholder='Szukaj' /></Box>
        </Box></Center>
       <h1> Popularne filmy</h1>
       <Box color='gray.50'  >{popularFilms.loading ? <h1> Loading...</h1>: <Responsive item={popularFilms}/>}</Box>
       <h1> Popularne seriale</h1>
        <Box color='gray.50'  >{popularSerials.loading ? <h1> Loading...</h1>: <Responsive item={popularSerials}/>}</Box>
       <h1> Trending</h1>
       <Box color='gray.50'  >{trending.loading ? <h1> Loading...</h1>: <Responsive item={trending}/>}</Box>
     {/*  <h1>popularne</h1>
       <Box color='gray.50'  ><Responsive films={films}/></Box>
       <h1>obejrzyj za darmo</h1>
       <Box color='gray.50'  ><Responsive films={films}/></Box> */}
       
      </MainTemplates>
    </div>
  )
}

export default HomePage