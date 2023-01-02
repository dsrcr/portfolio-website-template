import { Box, Flex, Stack, Text, Image } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import React from 'react'

const Header = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
    return (
        <Stack>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : "16"} align='flex-start'>
                    <Text fontSize='5xl' fontWeight={'semibold'}>Hi, I am</Text>
                    <Text fontSize='7xl' fontWeight={'bold'} bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' bgClip={'text'}>DS</Text>
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full' backgroundColor={'transparent'} boxShadow='lg' boxSize={'300px'} src='https://github.com/dsrcr.png' />
            </Flex>

        </Stack>
    )
}

export default Header
