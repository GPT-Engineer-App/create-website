import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" p={4}>
      <Flex>
        <Text color="white" fontSize="xl" fontWeight="bold">MyApp</Text>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>Home</Link>
        <Link as={RouterLink} to="/login" color="white" mx={2}>Login</Link>
        <Link as={RouterLink} to="/rate-videos" color="white" mx={2}>Rate Videos</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;