import React, { useState, useEffect } from 'react';
import { Box, Image, Text, Stack, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SeriesCard = ({ seriesId }) => {
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
    <Link to={`/detailsseries/${seriesId}`} style={{ textDecoration: 'none' }}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={`https://image.tmdb.org/t/p/w500${seriesData.poster_path}`} alt={seriesData.name} />

        <Box p="4">
          <Stack spacing={1}>
            <Text fontWeight="semibold" fontSize="md">
              {seriesData.name}
            </Text>
            <Text fontSize="sm">Data {seriesData.first_air_date}</Text>
          </Stack>
          <Box mt={2}>
            <CircularProgress value={seriesData.vote_average * 10} color="teal" size="32px">
              <CircularProgressLabel>{seriesData.vote_average}</CircularProgressLabel>
            </CircularProgress>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default SeriesCard;
