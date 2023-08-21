import React from 'react'

import {
    Drawer, Center,
    DrawerBody,
    DrawerFooter, Tooltip,
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
 
 
 
 



  return (
    <div>
        
       <Center> <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Lista sezonów
      </Button></Center>
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
                    <Box ><Tooltip label={x.overview} aria-label='A tooltip'>
                    
                  
                    <Link to={`/season/${movieid}/${x.season_number}/`}> 
                    <Box height={'30vh'} color={'white'} border={'solid'} background={`url(https://image.tmdb.org/t/p/original/${x.poster_path})`} objectFit={'scale-down'} filter={'grayscale(90%)'}>
                     
                    <Text fontWeight={'bold'} fontSize='4xl'>{x.name}</Text>
                    <Text fontWeight={'bold'} fontSize='4xl'>Data wydania:{x.air_date}</Text>
                    {/* <Text>Opis: {x.overview}</Text> */}
                    <Text fontWeight={'bold'} fontSize='4xl'>Ilośc odcinków:{x.episode_count}</Text>
                    
                    </Box>
                    </Link> 
                    </Tooltip>
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