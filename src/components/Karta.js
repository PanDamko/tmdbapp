import { Box, Image, Text, Stack, CircularProgress,CircularProgressLabel, VStack } from '@chakra-ui/react';

const Karta = ({ movie }) => {
  const { title, poster_path, release_date, vote_average, overview } = movie;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />

      <Box p="6">
        <Stack spacing={1}>
          <Text fontWeight="semibold" fontSize="xl">
            {title}
          </Text>
          <Text>Release Date: {release_date}</Text>
        </Stack>
        <Box mt={4}>
          <CircularProgress value={vote_average * 10} color="teal" size="40px">
            <CircularProgressLabel>{vote_average}</CircularProgressLabel>
          </CircularProgress>
        </Box>
        <VStack align="start" mt={4}>
          <Text fontWeight="semibold" fontSize="lg">
            Overview:
          </Text>
          <Text>{overview}</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Karta;