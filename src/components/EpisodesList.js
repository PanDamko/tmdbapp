import React, { useEffect, useState } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader, Box, Text,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,Spinner
  } from '@chakra-ui/react'
import { FetchPromise } from './FetchPromise'
import { Link } from 'react-router-dom'

const EpisodesList = ({movieid}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const alldata = FetchPromise(`https://api.themoviedb.org/3/tv/${movieid}?language=PL`)
 const [po,setPo]=useState("")
 const [bckh, setBckh]=useState("")
 useEffect(()=>{
    <Popover>
        <PopoverTrigger>
    {descri()}
    </PopoverTrigger>
    </Popover>
 },[po]);
 
function  descri(){
    console.log(po)
    return(
       
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>

    )
}


  return (
    <div>
        
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Lista sezonów
      </Button>
      {alldata === undefined ? <Spinner />:<Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='lg'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          
          <DrawerHeader>Lista sezonów</DrawerHeader>
          
          <DrawerBody>
           
            {alldata[0].seasons.map((x)=>{
                return(
                    <Box >
                      <Link to={`/season/${movieid}/${x.season_number}/`}> 
                    <Box height={'30vh'} color={'white'} border={'solid'} onClick={()=>setPo(x.overview)}background={`url(https://image.tmdb.org/t/p/original/${x.poster_path})`} objectFit={'scale-down'} filter={'grayscale(90%)'}>
                      {console.log(x)}
                    <Text fontWeight={'bold'} fontSize='4xl'>{x.name}</Text>
                    <Text fontWeight={'bold'} fontSize='4xl'>Data wydania:{x.air_date}</Text>
                    {/* <Text>Opis: {x.overview}</Text> */}
                    <Text fontWeight={'bold'} fontSize='4xl'>Ilośc odcinków:{x.episode_count}</Text>
                    
                    </Box>
                    </Link> 
                    </Box>   

                )
            })}    
          </DrawerBody>

          <DrawerFooter>
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>}

    </div>
  )
}

export default EpisodesList