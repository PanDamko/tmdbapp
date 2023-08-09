import React, { useState } from 'react'
import { FetchPromise } from './FetchPromise';
import Slider from "react-slick";
import { Spinner, Image,  Box, Text, Card, Center,   } from '@chakra-ui/react'
const CrewDetailsActor = ({actorid,series}) => {
  // eslint-disable-next-line no-unused-vars
  const[settings,setSettings]=useState({
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0})

    let linkk=""
     linkk=`https://api.themoviedb.org/3/person/${actorid}/movie_credits?language=PL`;

  const alldata = FetchPromise(linkk)
console.log(alldata)
  return (
    <Box>
      {alldata === undefined ? <Spinner /> :
          
            <Slider {...settings}>
                
            {alldata[0].cast.map((x)=>{
              return (<Card > 
                <Image boxSize='200px' src={`https://image.tmdb.org/t/p/w300${x.backdrop_path}`} alt='' borderRadius='1%' />
                <Text isTruncated key={x.original_title}>
                <Center key={x.original_title}>{`${x.original_title}`}</Center></Text>
                </Card> )            
            })}
              
            </Slider>
              }
       
       </Box>
  )
}

export default CrewDetailsActor