import { useState, useEffect } from 'react';
import { Box, Grid, Image, Text, Stack, Button} from '@chakra-ui/react';

const MovieCard = ({ movie }) => {
  const { original_title, poster_path, release_date, vote_average } = movie;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />

      <Box p="6">
        <Stack spacing={1}>
          <Text fontWeight="semibold" fontSize="xl">
            {original_title}
          </Text>
          <Text>Release Date: {release_date}</Text>
          <Text>Rating: {vote_average}</Text>
        </Stack>
      </Box>
    </Box>
  );
};

  const MovieList = () => {
    const [movieData, setMovieData] = useState([]);
    const [visibleMovies, setVisibleMovies] = useState(15); // Początkowa liczba widocznych filmów
    const moviesPerRow = 5;
    const rowsPerPage = 3;
  
    useEffect(() => {
      const fetchMovieData = async () => {
        try {
          const apiKey = '17c82726588bd065f78c9991dde2a619';
          const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;
          const response = await fetch(url);
          const data = await response.json();
          setMovieData(data.results);
        } catch (error) {
          console.error('Error fetching movie data:', error);
        }
      };
  
      fetchMovieData();
    }, []);
  
    const handleLoadMore = () => {
      setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + moviesPerRow * rowsPerPage);
    };



  if (!movieData.length) {
    return <div>Loading...</div>;
  }

  const visibleMovieData = movieData.slice(0, visibleMovies);

  return (
    <>
      <Grid templateColumns={`repeat(${moviesPerRow}, 1fr)`} gap={4}>
        {visibleMovieData.map((movie, index) => (
          <Box key={index}>
            <MovieCard movie={movie} />
          </Box>
        ))}
      </Grid>

      {visibleMovies < movieData.length && (
        <Button onClick={handleLoadMore} mt={4} variant="outline">
          Więcej
        </Button>
      )}
    </>
  );
};


export default MovieList;
