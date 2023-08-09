import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

const DetailSeriesPage = () => {
  const { seriesId } = useParams();
  const [seriesData, setSeriesData] = useState(null);

  useEffect(() => {
    const fetchSeriesData = async () => {
      try {
        const apiKey = '17c82726588bd065f78c9991dde2a619';
        const url = `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${apiKey}&language=pl`;
        const response = await fetch(url);
        const data = await response.json();

        setSeriesData(data);
      } catch (error) {
        console.error('Error fetching series data:', error);
      }
    };

    fetchSeriesData();
  }, [seriesId]);

  if (!seriesData) {
    return <div>Loading...</div>;
  }

  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={`https://image.tmdb.org/t/p/w500${seriesData.poster_path}`} alt={seriesData.name} />

      <Box p="4">
        <Text fontWeight="semibold" fontSize="xl">
          {seriesData.name}
        </Text>
        <Text fontSize="md" mt="2">
          {seriesData.overview}
        </Text>
        <Text fontSize="sm" mt="2">
          First Air Date: {seriesData.first_air_date}
        </Text>
        <Box mt="4">
          <CircularProgress value={seriesData.vote_average * 10} color="teal" size="32px">
            <CircularProgressLabel>{seriesData.vote_average}</CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailSeriesPage;
