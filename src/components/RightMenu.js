import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import React from 'react'
import { FetchPromise } from './FetchPromise'
import { Spinner} from '@chakra-ui/react'
import { Flex, Spacer, Box, Stack, chakra, Text, useColorModeValue, VisuallyHidden, } from '@chakra-ui/react'
const RightMenu = ({ movieid }) => {
    const alldata = FetchPromise(`https://api.themoviedb.org/3/movie/${movieid}?language=PL`,`https://api.themoviedb.org/3/movie/${movieid}/external_ids`,`https://api.themoviedb.org/3/movie/${movieid}/keywords`,`https://api.themoviedb.org/3/movie/${movieid}/remote/popularity`)
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
    return (
        <div>
            {alldata === undefined ? <Spinner /> :
            <Box>
    <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} target="_blank" href={`https://twitter.com/${alldata[1].twitter_id}`}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'FaFacebook'} target="_blank" href={`https://www.facebook.com/${alldata[1].facebook_id}`}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={'Instagram'} target="_blank" href={`https://www.instagram.com/${alldata[1].instagram_id}`}>
            <FaInstagram />
          </SocialButton>
        </Stack>

<Flex direction="column">
        <Text>Stan:</Text><Text> {alldata[0].status}</Text><Spacer />
<       Text>Oryginalny język:</Text><Text> angielski</Text><Spacer />

<Text>Budżet:</Text><Text>{alldata[0].budget}$</Text><Spacer />

<Text>Dochód:</Text><Text>{alldata[0].revenue}$</Text><Spacer />

            <Text>Słowa kluczowe:</Text>
            <Text>
         
              {alldata[2].keywords.map((x)=>{
               
                return(
                  <Text>{x.name}</Text>
                )
              })}
            </Text>




           </Flex>
            </Box>
}
        </div>
    )
}

export default RightMenu