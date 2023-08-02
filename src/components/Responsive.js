import React, {useState} from 'react'
import Slider from "react-slick";
import {Box, Image, Text} from '@chakra-ui/react'
const Responsive = ({item}) => {
    const[settings,setSettings]=useState({dots: true,
        infinite: false,
        speed: 2200,
        slidesToShow: 7,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]})

  return (
    <div>
        
   <Slider {...settings}>

          {item.data.results.map((x)=><Box><Image key={x.id}src={`https://image.tmdb.org/t/p/original/${x.poster_path}`} alt=''/>
          {/* <Text>{x.title}</Text>  */}
          </Box>  )}
        </Slider>


    </div>
  )
}

export default Responsive