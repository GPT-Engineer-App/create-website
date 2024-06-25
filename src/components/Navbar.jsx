import { Box, Flex, Link, Spacer, Text, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" p={4}>
      <Flex>
        <Text color="white" fontSize="xl" fontWeight="bold">Apex Capital</Text>
        <Spacer />
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="gray" variant="outline" mx={2}>
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem as={RouterLink} to="/">Home</MenuItem>
            <MenuItem as={RouterLink} to="/login">Login</MenuItem>
            <MenuItem as={RouterLink} to="/register">Register</MenuItem>
          </MenuList>
        </Menu>
        <Link as={RouterLink} to="/rate-videos" color="white" mx={2}>Rate Videos</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;