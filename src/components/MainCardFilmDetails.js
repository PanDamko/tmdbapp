import React  from 'react'
import { Link } from "react-router-dom"
import { CircularProgress, CircularProgressLabel, Spinner, Text, Box, Card, CardBody, Image, Flex, HStack, Spacer, } from '@chakra-ui/react'
import { FetchPromise } from './FetchPromise';


const MainCardFilmDetails = ({ movieid }) => {

const alldata = FetchPromise(`https://api.themoviedb.org/3/movie/${movieid}?language=PL`,`https://api.themoviedb.org/3/movie/${movieid}/videos?language=PL`,`https://api.themoviedb.org/3/movie/${movieid}/credits`)


    
    return (
        <div>
            {alldata === undefined ? <Spinner />:
             <Box> 
                <Card direction={{ base: 'row', sm: 'row' }} borderRadius='1rem'>
                    <Image objectFit="cover" width='400px' src={`https://image.tmdb.org/t/p/original/${alldata[0].backdrop_path}`} alt='' borderRadius='1rem' />
                    <CardBody><Flex alignSelf="stretch" direction="column">
                        <Text as='b' fontSize   ='4xl'>{alldata[0].title} </Text>
                        <Box> <Flex><Text as='b'>{alldata[0].release_date}&nbsp;</Text><Text></Text> {alldata[0].genres?.map((x) => <Text key={x.id}>{x.name}&nbsp;</Text>)}</Flex> </Box>
                        <Box> <Flex><CircularProgress value={alldata[0].vote_average * 10} color="teal" size="40px">
            <CircularProgressLabel>{alldata[0].vote_average}</CircularProgressLabel>
          </CircularProgress>  {alldata[1].results[0] === undefined ? "":<Link target="_blank" to={`https://${alldata[1].results[0].site}.com/watch?v=${alldata[1].results[0].key}`}>&nbsp;Zwiatun</Link> }</Flex></Box>
                        <Text>Tytuł oryginalny: {alldata[0].original_title}</Text>
                        <Text>{alldata[0].tagline}</Text>
                        <Text>Opis:</Text>
                        <Text>{alldata[0].overview}</Text>
                        <Flex justify='space-between'><HStack>
                            <Box><Text>{alldata[2].crew.map((x) => x.job === "Director" ? x.name : "")}  </Text><Text>"Director"</Text></Box>
                            <Spacer />
                            <Box><Text>{alldata[2].crew.map((x) => x.job === "Characters" ? x.name : "")}</Text><Text>"Characters"</Text></Box>
                            <Spacer />
                            <Box><Text>{alldata[2].crew.map((x) => x.job === "Writer" ? x.name : "")}</Text><Text>"Writer"</Text></Box>
                        </HStack></Flex>

                        </Flex></CardBody>

                    </Card></Box>
}
        </div>
    )
}

export default MainCardFilmDetails