import React from 'react'
import { useParams, Link } from "react-router-dom"
import { Spinner,Text, Box, Card, CardBody, Image, Flex, VStack, HStack, Spacer, Tab, TabList, TabPanel, TabPanels,Tabs, } from '@chakra-ui/react'
import MainTemplates from '../templetaes/MainTemplates';
import { useFetch } from './UseFetch';
import Slider from "react-slick";
import ResponsveSliderDetailsFilms from './ResponsveSliderDetailsFilms';
const Details = () => {

  let { movieid } = useParams();

  const data = useFetch(`https://api.themoviedb.org/3/movie/${movieid}?language=PL`)
  const video = useFetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=PL`)
  const data3 = useFetch(`https://api.themoviedb.org/3/movie/${movieid}/credits`)
  const allPromise = Promise.all([data, video, data3]);
  return (
    <div>
      <MainTemplates>
        {data.loading ? <Spinner /> : <Box>
          <Card direction={{ base: 'row', sm: 'row' }} borderRadius='1rem'>
            <Image boxSize='400px' src={`https://image.tmdb.org/t/p/original/${data.data.backdrop_path}`} alt='' borderRadius='1rem' />
            <CardBody>{data3.loading ? "sad" : console.log({ data3 })}
              <Text>{data.data.title} "(2023)"</Text>
              <Box> <Flex>{data.data.release_date} {data.data.genres.map((x) => <Text key={x.id}>{x.name},</Text>)} 1h 54m</Flex> </Box>


              <Box> <Flex>{data.data.vote_average}  {data.loading ? <Spinner /> : <Link target="_blank" to={`https://${video.data.results[0].site}.com/watch?v=${video.data.results[0].key}`}>Zwiatun</Link>} </Flex></Box>


              <Text>Tytuł oryginalny {data.data.original_title}</Text>
              <Text>{data.data.tagline}</Text>
              <Text>Opis:</Text>
              <Text>{data.data.overview}</Text>
              <Flex justify='space-between'><HStack>
                <Box><Text>{data3.data.crew.map((x) => x.job === "Director" ? x.name : "")}  </Text><Text>Director"</Text></Box>
                <Spacer />
                <Box><Text>{data3.data.crew.map((x) => x.job === "Characters" ? x.name : "")}</Text><Text>"Characters"</Text></Box>
                <Spacer />
                <Box><Text>{data3.data.crew.map((x) => x.job === "Writer" ? x.name : "")}</Text><Text>"Writer"</Text></Box>
              </HStack></Flex>

            </CardBody>

          </Card>

          <Box   >

            <Box w="70%" >
            <Box><Slider><ResponsveSliderDetailsFilms item={data3.data.crew} /> </Slider></Box>
            
              <Box><h1>Media</h1></Box>
         <Box>
                <Tabs variant='enclosed'>
                  <TabList>
                    <Tab>Filmy</Tab>
                    <Tab>Tła</Tab>
                    <Tab>Plakaty</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Box>{data.loading ? <Spinner /> : video.data.results.map((x) => <Link target="_blank" key={x.id} to={`https://${x.site}.com/watch?v=${x.key}`}>Zwiatun</Link>)}</Box>
                    </TabPanel>
                    <TabPanel>
                      <p>Tła</p>
                    </TabPanel>
                    <TabPanel>
                      <p>Plakaty</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
                
              </Box>
            </Box>
            <Box w="30%" ><h1>boczne menu</h1></Box>
          </Box>
        </Box>}
      </MainTemplates>

    </div>
  )
}

export default Details