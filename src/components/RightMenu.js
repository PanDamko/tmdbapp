import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import React from 'react'
import { FetchPromise } from './FetchPromise'
import { Spinner} from '@chakra-ui/react'
import { Box, Stack, chakra, Text, useColorModeValue, VisuallyHidden, } from '@chakra-ui/react'
const RightMenu = ({ movieid }) => {
    const alldata = FetchPromise(`https://api.themoviedb.org/3/movie/${movieid}?language=PL`,`https://api.themoviedb.org/3/movie/${movieid}/external_ids`)
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


        <Text>Stan: {alldata[0].status}</Text>
<       Text>Oryginalny język angielski</Text>

<Text>Budżet:{alldata[0].budget}$</Text>

<Text>Dochód:{alldata[0].revenue}$</Text>

            <Text>Słowa kluczowe

                feminism
                patriarchy
                satire
                based on toy
                female protagonist
                doll
                fantasy world
                motherhood
                existentialism
                woman director
                mother daughter relationship</Text>





            <Text>Trend popularności</Text>
            </Box>
}
        </div>
    )
}

export default RightMenu