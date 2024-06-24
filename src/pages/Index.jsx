import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" color="white">Welcome to MyApp</Text>
        <Text color="white">Start by logging in or rating some videos!</Text>
      </VStack>
    </Container>
  );
};

export default Index;