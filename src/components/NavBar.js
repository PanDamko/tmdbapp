
import {  Box,  Flex, Avatar,HStack,Text,IconButton,Button,Menu,MenuButton,MenuList,MenuItem,MenuDivider,useDisclosure,useColorMode,Stack,Image,} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
 import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import Logo from "../images/free_logos_dribbble_ph.jpg"

const Links = [
  {name:'Strona główna', slug:'/'}, 
  {name:'Filmy', slug:'/moviepage'},
  {name:'Seriale', slug:'/series'},
  {name:'Aktorzy', slug:'/actorpage'},
  {name:'FAQ', slug:'/faqpage'}]
 
  



export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure()
 const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box  px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Image boxSize='60px' src={Logo} alt="" /> </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link to={link.slug} key={link.slug}><Text fontSize="2xl"> {link.name}</Text></Link>
              ))}
            </HStack>
          </HStack>
          
          
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            


          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link to={link.slug} key={link.slug}>{link.name}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </>
  )
}
