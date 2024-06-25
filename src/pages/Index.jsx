import { Container, Text, VStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box bgGradient="linear(to-r, blue.500, black)" bgClip="text">
          <Text fontSize="2xl" color="transparent">Welcome to Apex Capital</Text>
        </Box>
        <Text color="white">Start by logging in or rating some videos!</Text>
      </VStack>
    </Container>
  );
};

export default Index;