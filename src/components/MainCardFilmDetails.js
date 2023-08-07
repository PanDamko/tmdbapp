import React  from 'react'
import { Link } from "react-router-dom"
import { Spinner, Text, Box, Card, CardBody, Image, Flex, HStack, Spacer, } from '@chakra-ui/react'


import { FetchPromise } from './FetchPromise';


const MainCardFilmDetails = ({ movieid }) => {

const alldata =FetchPromise(`https://api.themoviedb.org/3/movie/${movieid}?language=PL`,`https://api.themoviedb.org/3/movie/${movieid}/videos?language=PL`,`https://api.themoviedb.org/3/movie/${movieid}/credits`)


    
    return (
        <div>
            {alldata === undefined ? <Spinner />:
             <Box>
                <Card direction={{ base: 'row', sm: 'row' }} borderRadius='1rem'>
                    <Image boxSize='400px' src={`https://image.tmdb.org/t/p/original/${alldata[0].backdrop_path}`} alt='' borderRadius='1rem' />
                    <CardBody>
                        <Text as='b' fontSize='4xl'>{alldata[0].title} </Text>
                        <Box> <Flex><Text as='b'>{alldata[0].release_date} </Text><Text></Text> {alldata[0].genres.map((x) => <Text key={x.id}>{x.name}-</Text>)}</Flex> </Box>
                        <Box> <Flex>{alldata[0].vote_average}  {alldata[1].results[0] === undefined ? "":<Link target="_blank" to={`https://${alldata[1].results[0].site}.com/watch?v=${alldata[1].results[0].key}`}>Zwiatun</Link> }</Flex></Box>
                        <Text>Tytuł oryginalny: {alldata[0].original_title}</Text>
                        <Text>{alldata[0].tagline}</Text>
                        <Text>Opis:</Text>
                        <Text>{alldata[0].overview}</Text>
                        <Flex justify='space-between'><HStack>
                            <Box><Text>{alldata[2].crew.map((x) => x.job === "Director" ? x.name : "")}  </Text><Text>Director"</Text></Box>
                            <Spacer />
                            <Box><Text>{alldata[2].crew.map((x) => x.job === "Characters" ? x.name : "")}</Text><Text>"Characters"</Text></Box>
                            <Spacer />
                            <Box><Text>{alldata[2].crew.map((x) => x.job === "Writer" ? x.name : "")}</Text><Text>"Writer"</Text></Box>
                        </HStack></Flex>

                    </CardBody>

                </Card></Box>
}
        </div>
    )
}

export default MainCardFilmDetails