import { Box, Circle, Flex, Stack } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/media-query'
import Text from 'react-text'
import React from 'react'

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark"
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
  return(
    <Stack>
      <Circle position={'absolute'} bg="blue.100" opacity={"0.1"} w="300px" h="300px" alignSelf={'flex-end'}/>
      <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
        <Box mt={isNotSmallerScreen ? "0" : "16"} align='flex-start'>
          <Text fontSize="5x1"></Text>
        </Box>
      </Flex>
    
    </Stack>
  )
}

export default Header
