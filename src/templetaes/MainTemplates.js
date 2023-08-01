import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {  Box,} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
const MainTemplates = ({children}) => {
  return (
    <div>
      <ChakraProvider>
      <Box  w='100%'   h='100%'    bgGradient={[
            'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]}>
      <NavBar />
      
      {children}
      <Footer />
      </Box>
      </ChakraProvider>
      
      
    </div>
  )
}

export default MainTemplates