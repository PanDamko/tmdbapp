import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {  Center,Box} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
const MainTemplates = ({children}) => {
  return (
    <div>
      <ChakraProvider>
      <Box  w='100%'   h='100%'    bgGradient={[
            'linear(to-tr, gray.700, gray.300)',
    'linear(to-t, gray.700, gray.300)',
    'linear(to-b, gray.700, gray.300)',
  ]}>
      <NavBar />
      <Center>
      <Box  w='70%'>
      {children}
      </Box ></Center>
      <Footer />
      </Box>
      </ChakraProvider>
      
      
    </div>
  )
}

export default MainTemplates