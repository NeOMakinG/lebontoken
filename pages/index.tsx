import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Search from '../components/Search'

const Home: NextPage = () => {
  return (
    <Box>
      <Search />
    </Box>
  )
}

export default Home
