import React, { useState } from 'react'
import { Spinner, Image, Tab, TabList, TabPanel, TabPanels, Tabs, } from '@chakra-ui/react'
import Slider from "react-slick";
import { Link} from "react-router-dom"
import { FetchPromise } from './FetchPromise';
import { AspectRatio } from '@chakra-ui/react'
const TabFilms = ({ movieid }) => {

  // eslint-disable-next-line no-unused-vars
  const[settings,setSettings]=useState({
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0})
  const alldata = FetchPromise(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=PL`,`https://api.themoviedb.org/3/movie/${movieid}/images`)


  return (
    <div>
      {alldata === undefined ? <Spinner /> :
        <Tabs variant='enclosed'>
          Media
          <TabList>
            <Tab>Filmy</Tab>
            <Tab>Tła</Tab>
            <Tab>Plakaty</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Slider {...settings}>
              {alldata[0].results.map((x) => {
                
                return (<AspectRatio key={x.key} minW = '300px' maxW='560px' ratio={1}>
                  <iframe
                    key={x.key}
                    title={x.name}
                    src={`https://${x.site}.com/watch?v=${x.key}`}
                    allowFullScreen
                  />
                </AspectRatio>)
              })}
              </Slider>
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

export default TabFilms