import React, {useState} from 'react'
import Slider from "react-slick";
import {Box, Image,  } from '@chakra-ui/react'
import {useNavigate, Link} from "react-router-dom"
const Responsive = ({item}) => {

  const navigate = useNavigate();
  const handleNavigate = (x)=>{
    //console.log(x);
         navigate(`/details`, {state:{item: x}})
     }
    // eslint-disable-next-line no-unused-vars
    const[settings,setSettings]=useState({
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 6,
        slidesToScroll: 5,
        initialSlide: 0,
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

          {item.data.results.map((x)=><Box borderRadius="5px" key={x.id}><Link to={`/details/${x.id}`} ><Image borderRadius="5px" onDoubleClick={()=>handleNavigate(x.id)}  src={`https://image.tmdb.org/t/p/original/${x.poster_path}`} alt=''/></Link>
          {/* <Text>{x.title}</Text>  */}
          </Box>  )}
        </Slider>


    </div>
  )
}

export default Responsive