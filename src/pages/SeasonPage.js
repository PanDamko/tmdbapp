import React from 'react'
import { useParams } from "react-router-dom"
import MainTemplates from '../templetaes/MainTemplates';
import { Text, Flex, CardHeader, CircularProgressLabel, CircularProgress, Image, Spinner, Card, Box, Center, CardFooter, CardBody } from '@chakra-ui/react';
import { FetchPromise } from '../components/FetchPromise';
const SeasonPage = () => {
    let { movieid, season } = useParams();

    const alldata = FetchPromise(`https://api.themoviedb.org/3/tv/${movieid}?language=PL`, `https://api.themoviedb.org/3/tv/${movieid}/season/${season}?language=PL`)
    console.log(alldata);
    return (
        <Box>
            <MainTemplates>
                {alldata === undefined ? <Spinner /> :
                    <Box ><Flex direction={'column'} gridGap={4} justifyContent={'space-between'}>
                        <Text>{alldata[0].name} sezon {season}</Text>
                        {alldata[1].episodes.map((x) => {
                            return (
                            <Card key={x.id}><Flex justifyContent={'space-between'} >
                                <Box >
                                    <Card height={'100%'} width={'100%'} justifyContent={'space-between'}><CardHeader>
                                        <Center><Text fontSize={'md'}>Odcinek:&nbsp;{x.episode_number}</Text></Center>
                                        <Center><Text fontSize={'3xl'}>Tytuł:&nbsp;{x.name}</Text></Center></CardHeader>

                                        <CardBody>
                                            <Text fontSize={'md'}>Opis:&nbsp;{x.overview}</Text>
                                        </CardBody>

                                        <CardFooter justifyContent={'space-between'}>
                                            <Text>Premiera:&nbsp;{x.air_date} </Text>
                                            <CircularProgress value={x.vote_average * 10} color="teal" size="80px"><CircularProgressLabel>{x.vote_average}</CircularProgressLabel></CircularProgress>
                                            <Text> Czas trwania:&nbsp;{x.runtime}min</Text>
                                        </CardFooter>
                                    </Card>
                                </Box>

                                <Image src={`https://image.tmdb.org/t/p/original/${x.still_path}`} width={'50vh'} height={'50vh'} objectFit="cover" alignSelf={'baseline'}/>


                            </Flex> </Card>

                            )
                        })}

                    </Flex>  </Box>
                }
            </MainTemplates>
        </Box>
    )
}

export default SeasonPage