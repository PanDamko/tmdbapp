import React from 'react'
import { Link, useParams} from "react-router-dom"
import MainTemplates from '../templetaes/MainTemplates'
import { FetchPromise } from '../components/FetchPromise'
import { Card, Image, Text, Center, Spinner, WrapItem, Wrap,  CardBody } from '@chakra-ui/react'

const FullCredtisPage = () => {
 
  let { movieid } = useParams();
  const alldata = FetchPromise(`https://api.themoviedb.org/3/movie/${movieid}/credits`,`https://api.themoviedb.org/3/movie/${movieid}?language=PL`)
  
  return (
    <div>
      <MainTemplates><Center>
      {alldata === undefined ? <Spinner /> :
      <Card direction={{ base: 'row', sm: 'row' }} borderRadius='1rem'>
                    <Image boxSize='400px' src={`https://image.tmdb.org/t/p/original/${alldata[1].backdrop_path}`} alt='' borderRadius='1rem' />
                    <CardBody>
                        <Text as='b' fontSize='4xl'>{alldata[1].title} </Text>                   
                        <Center><Text fontSize='3xl'><Link to={`/details/${movieid}`} >Wróć</Link></Text></Center>
                    </CardBody>

                </Card>

  }</Center>
     <Wrap justify='center' direction='row'>
          
     {alldata === undefined ? <Spinner /> :
          alldata[0].cast.map((x)=>{
      return(
        <WrapItem>
        <Card >
        <Center><Image key={x.file_path} objectFit="cover" width='300px' src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${x.profile_path}`} alt='' borderRadius='1%' /></Center><Text><Center>{`${x.name}`}</Center></Text>
        </Card></WrapItem>
      )
     })
    
}

          </Wrap>

     
      </MainTemplates>
    </div >
  )
}

export default FullCredtisPage