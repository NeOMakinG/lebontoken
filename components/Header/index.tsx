import { Box, Button, Flex, Heading, Stack, useDisclosure, Link as CLink } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from 'next/link';
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter()
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const {
    isConnected,
    connect,
    ensName,
    truncatedAddress,
    balance,
    truncatedBalance
  } = useAuth()

  return (
    <Flex as="nav" alignItems="center" justifyContent="space-between" flexWrap="wrap" px={6} py={1} borderBottom='1px'  borderColor='gray.200'>
      <Heading as="h1" size="lg" letterSpacing={"tighter"} mr={5}>
        <Link href="/">
          Lebontoken
        </Link>
      </Heading>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        {isConnected &&
          <Link href="/post">
            <CLink color="teal" p={4} fontWeight="bold">My products</CLink>
          </Link>
        }
      </Stack>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {!isConnected ?
          <Button colorScheme="teal" onClick={() => connect()}>
            Connect Wallet
          </Button>
          : <>
            <Button
              variant="outline"
              mr={4}
              onClick={() => router.push('/post')}
            >
              Post something
            </Button>
            <Button
              mr={4}
            >
             {ensName ?? truncatedAddress}  ({truncatedBalance} {balance?.symbol})
            </Button>
          </>
        }
      </Box>
    </Flex>
  )
}

export default Header
