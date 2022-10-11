import { border, Container, FormControl, FormHelperText, FormLabel, Input, Textarea, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Post: NextPage = () => {
  const formBackground = useColorModeValue('gray.50', 'gray.850')
  const borderColor = useColorModeValue('gray.200', 'gray.900')

  return (
    <Container maxW='container.sm' bg={formBackground} py={4} mt={4} borderRadius={3} border="1px" borderColor={borderColor}>
      <FormControl mb={4}>
        <FormLabel>Title</FormLabel>
        <Input type='text' />
        <FormHelperText>This is the main way to find your product</FormHelperText>
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Price</FormLabel>
        <Input type='number' placeholder="0.02" />
        <FormHelperText>We currently only support ETH</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea />
        <FormHelperText>Describe as much as possible your product</FormHelperText>
      </FormControl>
    </Container>
  )
}

export default Post
