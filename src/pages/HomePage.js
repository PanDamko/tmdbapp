import React from 'react'
import MainTemplates from '../templetaes/MainTemplates'

import { Input, Text, Box, Center } from '@chakra-ui/react'
import Responsive from '../components/Responsive'
import { useFetch } from '../components/UseFetch'

const HomePage = () => {

  const popularFilms = useFetch('https://api.themoviedb.org/3/movie/popular');
  const popularSerials = useFetch('https://api.themoviedb.org/3/tv/popular');
  const topratedfilms = useFetch('https://api.themoviedb.org/3/movie/top_rated')
  const topratedSerials = useFetch('https://api.themoviedb.org/3/tv/top_rated')
  const trending = useFetch('https://api.themoviedb.org/3/trending/all/day')
  
  return (
    <div>
      <MainTemplates>
        <Center>
          <Box borderRadius="5%" background='url(https://i.pravatar.cc/300) center/cover no-repeat' w="80" >
            <Box display='flex' alignItems='center' flexDirection="column"><Text>Witamy na naszej stronie.</Text>
              <Input w="50%" size='md' placeholder='Szukaj' /></Box>
          </Box></Center>
        <Text>Popularne filmy</Text>
        <Box color='gray.50'  >{popularFilms.loading ? <Text> Loading...</Text> : <Responsive item={popularFilms} />}</Box>
        <Text>Popularne seriale</Text>
        <Box color='gray.50'  >{popularSerials.loading ? <Text> Loading...</Text> : <Responsive item={popularSerials} />}</Box>
        
        <Text>Najlepiej oceniane filmy</Text>
        <Box color='gray.50'  >{topratedfilms.loading ? <Text> Loading...</Text> : <Responsive item={topratedfilms} />}</Box>
        <Text>Najlepiej oceniane seriale</Text>
        <Box color='gray.50'  >{topratedSerials.loading ? <Text> Loading...</Text> : <Responsive item={topratedSerials} />}</Box>
        
        <Text>Trendy</Text>
        <Box color='gray.50'  >{trending.loading ? <Text> Loading...</Text> : <Responsive item={trending} />}</Box>
      </MainTemplates>
    </div>
  )
}

export default HomePage