import React  from 'react'
import { Link } from "react-router-dom"
import { CircularProgress, CircularProgressLabel, Spinner, Text, Box, Card, CardBody, Image, Flex, HStack, Spacer, } from '@chakra-ui/react'
import { FetchPromise } from './FetchPromise';
import EpisodesList from '../components/EpisodesList'
const MainCardSeriesDetails = ({ movieid }) => {
    const alldata =FetchPromise(`https://api.themoviedb.org/3/tv/${movieid}?language=PL`,`https://api.themoviedb.org/3/tv/${movieid}/videos`,`https://api.themoviedb.org/3/tv/${movieid}/credits`)
   
    return (
        <div>
            {alldata === undefined ? <Spinner />:
             <Box> 
                <Card direction={{ base: 'row', sm: 'row' }} borderRadius='1rem'>
                    <Image objectFit="cover" width='400px' src={`https://image.tmdb.org/t/p/original/${alldata[0].backdrop_path}`} alt='' borderRadius='1rem' />
                    <CardBody><Flex alignSelf="stretch" direction="column">
                        <Text as='b' fontSize   ='4xl'>{alldata[0].name} </Text>
                        <Box> <Flex><Text as='b'>Nadawany od&nbsp;{alldata[0].first_air_date}&nbsp;do&nbsp;{alldata[0].last_air_date}&nbsp;</Text></Flex> </Box>
                        <Box> <Flex>{alldata[0].genres?.map((x) => <Text key={x.id}>{x.name}&nbsp;</Text>)}</Flex> </Box>
                        <Box> <Flex><CircularProgress value={alldata[0].vote_average * 10} color="teal" size="40px">
            <CircularProgressLabel>{alldata[0].vote_average}</CircularProgressLabel>
          </CircularProgress>  {alldata[1].results[0] === undefined ? "":<Link target="_blank" to={`https://${alldata[1].results[0].site}.com/watch?v=${alldata[1].results[0].key}`}>&nbsp;Zwiatun</Link> }</Flex></Box>
                        <Text>Tytuł oryginalny: {alldata[0].original_name}</Text>
                        <Text>{alldata[0].tagline}</Text>
                        <Text>Opis:</Text>
                        <Text>{alldata[0].overview}</Text>
                        <Flex justify='space-between'><HStack>
                            <Box><Text>Twórca:&nbsp;{alldata[0].created_by.map((x)=>x.name)}  </Text></Box>
                            <Spacer />
                            
                        </HStack></Flex>
                        <EpisodesList movieid={movieid} />
                        </Flex></CardBody>

                    </Card></Box>
}
        </div>
  )
}

export default MainCardSeriesDetails