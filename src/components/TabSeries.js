import React, { useState } from 'react'
import { Center, Spinner, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Slider from "react-slick";
import { Link} from "react-router-dom"
import { FetchPromise } from './FetchPromise';
import { Wrap, WrapItem, AspectRatio, Flex} from '@chakra-ui/react'

const TabSeries = ({movieid}) => {
    // eslint-disable-next-line no-unused-vars
    const[settings,setSettings]=useState({
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0})
      const alldata = FetchPromise(`https://api.themoviedb.org/3/tv/${movieid}/videos`,`https://api.themoviedb.org/3/tv/${movieid}/images`)
    
  return (
    <div>
        {alldata === undefined ? <Spinner /> :
        <Tabs variant='enclosed'>
          <Center><Text fontSize='4xl'>Media</Text></Center>
          <TabList>
            <Tab>Filmy</Tab>
            <Tab>Tła</Tab>
            <Tab>Plakaty</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              
            <Flex direction="row" justify="space-between">
              <Wrap>
              {alldata[0].results === 0 ? <Text>Brak zwiastunów</Text>:alldata[0].results.map((x) => {
                
                return (<WrapItem><AspectRatio key={x.key} minW = '200px' maxW='300px' ratio={1}>
                  <iframe
                    key={x.key}
                    title={x.name}
                    src={`https://${x.site}.com/embed/${x.key}`}
                    allowFullScreen
                  />
                </AspectRatio></WrapItem>)
              })}</Wrap></Flex>
              
            </TabPanel>
            <TabPanel>
            <Slider {...settings}>
           
            {alldata[1].backdrops.map((x)=>{
              return (
                <Link key={x.file_path} target="_blank" to={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${x.file_path}`}><Image boxSize='200px' src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${x.file_path}`} alt='' borderRadius='1rem' /></Link>
              )            })}
            </Slider>
            </TabPanel>
            <TabPanel>
            <Slider {...settings}>
            
            {alldata[1].posters.map((x)=>{
              return (
                <Link key={x.file_path} target="_blank" to={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${x.file_path}`}><Image boxSize='200px' src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${x.file_path}`} alt='' borderRadius='1rem' /></Link>
              )            })}
            </Slider>
            </TabPanel>
          </TabPanels>
        </Tabs>

      }


    </div>
  )
}

export default TabSeries