'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'


const SocialButton = ({
  children,
  label,
  href,
  target,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target='target'
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallWithSocial() {
  return (
    <Box position={'fixed'} bottom={'0'} minWidth={'100%'}
       bg={useColorModeValue('gray.50', 'gray.900')}
      // color={useColorModeValue('gray.700', 'gray.200')}
      >
      <Container 
        as={Stack}
        maxW={'8xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>Projekt REACT Chakra UI Damian, Krzysztof, Mateusz.</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} target="_blank" href={'https://twitter.com/'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} target="_blank" href={'https://www.youtube.com/'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} target="_blank" href={'https://www.instagram.com/'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
