import { Box, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Search: React.FC = () => {
  return (
    <Box p={6} borderBottom='1px' borderColor='gray.200'>
      <FormControl>
        <FormLabel>
          <Heading as="h2" fontSize={20}>Search for a product</Heading>
        </FormLabel>
        <Input type='text' placeholder="Product name" />
      </FormControl>
    </Box>
  )
}

export default Search
