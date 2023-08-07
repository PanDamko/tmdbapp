import React, { useState } from 'react'
import { FetchPromise } from './FetchPromise';
import Slider from "react-slick";
import { Link} from "react-router-dom"
import { Spinner, Image,  Box, Text, Card, Center,   } from '@chakra-ui/react'
const CrewDetailsFilm = ({movieid}) => {
  // eslint-disable-next-line no-unused-vars
  const[settings,setSettings]=useState({
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0})
  const alldata = FetchPromise(`https://api.themoviedb.org/3/movie/${movieid}/credits`)


  return (
    <Box>
       <Center><Text fontSize='4xl'> Najlepiej opłacana obsada ( <Link to={`/credits/${movieid}`}>Pełna Obsada</Link> )</Text></Center>
      {alldata === undefined ? <Spinner /> :
          
            <Slider {...settings}>
                
            {alldata[0].cast.slice(0,10).map((x)=>{
              return (<Card > 
                <Link key={x.file_path} target="_blank" to={`https://www.google.com`}><Image key={x.file_path} boxSize='200px' src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${x.profile_path}`} alt='' borderRadius='1%' /><Text isTruncated key={x.file_path}><Center key={x.file_path}>{`${x.name}`}</Center></Text></Link>
                </Card> )            })}
              
            </Slider>
              }
       
       </Box>
  )
}

export default CrewDetailsFilm