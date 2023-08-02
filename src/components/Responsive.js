import React, {useState} from 'react'
import Slider from "react-slick";
import {Box, Image, Text} from '@chakra-ui/react'
const Responsive = ({item}) => {
    const[settings,setSettings]=useState({
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 6,
        slidesToScroll: 5,
        initialSlide: 3,
        // className: "center",
        // centerMode: true,
        // centerPadding: "60px",
        
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          }
        ]})

  return (
    <div>
        
   <Slider {...settings}>

          {item.data.results.map((x)=><Box key={x.id}><Image onDoubleClick={()=>console.log(x.id)}  src={`https://image.tmdb.org/t/p/original/${x.poster_path}`} alt=''/>
          {/* <Text>{x.title}</Text>  */}
          </Box>  )}
        </Slider>


    </div>
  )
}

export default Responsive