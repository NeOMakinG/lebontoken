import { Container, FormControl, FormHelperText, FormLabel, Input, Textarea } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Post: NextPage = () => {
  return (
    <Container maxW='container.sm' bg='gray.50' py={4} mt={4} borderRadius={3} border="1px" borderColor="gray.200">
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
