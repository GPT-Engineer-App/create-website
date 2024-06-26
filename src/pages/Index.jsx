import { Container, Text, VStack, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box border="2px solid black" borderRadius="md" p={2} bg="black">
          <Text fontSize="2xl" color="white">Welcome to Apex Capital</Text>
        </Box>
        <Text color="white">Start by logging in or rating some videos!</Text>
      </VStack>
    </Container>
  );
};

export default Index;