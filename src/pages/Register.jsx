import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Handle registration logic here
    console.log("Registering with", email, password);
  };

  return (
    <Container centerContent>
      <Box bg="gray.700" p={8} borderRadius="md" boxShadow="lg" w="100%" maxW="md">
        <Heading mb={6} color="white">Apex Capital Register</Heading>
        <VStack spacing={4}>
          <FormControl id="email">
            <FormLabel color="white">Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel color="white">Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="blue" onClick={handleRegister}>Register</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Register;