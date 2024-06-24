import { Box, Button, Container, Heading, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const RateVideos = () => {
  const [coins, setCoins] = useState(0);

  const handleLike = () => {
    setCoins(coins + 1);
  };

  const handleDislike = () => {
    setCoins(coins - 1);
  };

  return (
    <Container centerContent>
      <Box bg="gray.700" p={8} borderRadius="md" boxShadow="lg" w="100%" maxW="md">
        <Heading mb={6} color="white">Rate Videos on Apex Capital</Heading>
        <VStack spacing={4}>
          <Box bg="gray.600" p={4} borderRadius="md" w="100%">
            <Text color="white">Video 1</Text>
            <Button leftIcon={<FaThumbsUp />} colorScheme="green" onClick={handleLike}>Like</Button>
            <Button leftIcon={<FaThumbsDown />} colorScheme="red" onClick={handleDislike}>Dislike</Button>
          </Box>
          <Box bg="gray.600" p={4} borderRadius="md" w="100%">
            <Text color="white">Video 2</Text>
            <Button leftIcon={<FaThumbsUp />} colorScheme="green" onClick={handleLike}>Like</Button>
            <Button leftIcon={<FaThumbsDown />} colorScheme="red" onClick={handleDislike}>Dislike</Button>
          </Box>
          <Text color="white">Coins Earned: {coins}</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default RateVideos;