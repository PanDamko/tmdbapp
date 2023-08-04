import React from 'react'
import { Spinner, Box, Tab, TabList, TabPanel, TabPanels, Tabs, } from '@chakra-ui/react'
import { useFetch } from '../components/UseFetch';
import { Link } from "react-router-dom"
import { FetchPromise } from './FetchPromise';
import { AspectRatio } from '@chakra-ui/react'
const TabFilms = ({ movieid }) => {


  const alldata = FetchPromise(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=PL`)


  return (
    <div>
      {alldata === undefined ? <Spinner /> :
        <Tabs variant='enclosed'>
          <TabList>
            <Tab>Filmy</Tab>
            <Tab>Tła</Tab>
            <Tab>Plakaty</Tab>
          </TabList>
          <TabPanels>

            <TabPanel>

              {/* {alldata[0].results.map( (x)=><Link target="_blank" key={x.id} to={`https://${x.site}.com/watch?v=${x.key}`}>Zwiastun</Link>)}
                  {alldata[0].results.map( (x)=><AspectRatio key={x.id} maxW='320px' ratio={1}>  <iframe title='naruto' src={`https://${x.site}.com/watch?v=${x.key}`} allowFullScreen/></AspectRatio>)} */}

              {alldata[0].results.map((x) => {
                console.log(x);
                return (<AspectRatio maxW='560px' ratio={1}>
                  <iframe
                    title={x.name}
                    src={`https://${x.site}.com/watch?v=${x.key}`}
                    allowFullScreen
                  />
                </AspectRatio>)
              })}

              <AspectRatio maxW='560px' ratio={1}>
                <iframe
                  title={alldata[0].results[0].name}
                  src={`https://youtube.com/watch?v=${alldata[0].results[0].key}`}

                  allowFullScreen
                />

              </AspectRatio>


            </TabPanel>
            <TabPanel>
              <p>Tła</p>
            </TabPanel>
            <TabPanel>
              <p>Plakaty</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

      }


    </div>
  )
}

export default TabFilms