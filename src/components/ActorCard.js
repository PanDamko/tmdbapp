import React from 'react';
import { Box, Image, Text, Stack } from '@chakra-ui/react';

const ActorCard = ({ actor }) => {
  const { name, profile_path, known_for_department, known_for } = actor;


  return (
    <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      {profile_path && (
        <Image src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
      )}

      <Box p="6">
        <Stack spacing={1}>
          <Text fontWeight="semibold" fontSize="sm">
            {name}
          </Text>
          <Text>{known_for_department}</Text>
          <Text fontWeight="bold" fontSize="sm">
            Znany z:
          </Text>
          {known_for.map((movie) => (
            <Text key={movie.id}>{movie.original_title}</Text>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ActorCard;
