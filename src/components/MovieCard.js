import { useState, useEffect } from 'react';
import { Box, Grid, Image, Select, Text, Stack, Button, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { useNavigate, Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { original_title, poster_path, release_date, vote_average } = movie;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />

      <Box p="6">
        <Stack spacing={1}>
          <Text fontWeight="semibold" fontSize="sm">
            {original_title}
          </Text>
          <Text>Data {release_date}</Text>
        </Stack>
        <Box mt={4}>
          <CircularProgress value={vote_average * 10} color="teal" size="40px">
            <CircularProgressLabel>{vote_average}</CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Box>
    </Box>
  );
};

const MovieList = () => {
  const [movieData, setMovieData] = useState([]);
<<<<<<< HEAD
  const [visibleMovies, setVisibleMovies] = useState(10);
  const [sortOption, setSortOption] = useState('rating');
  const moviesPerRow = 5;
=======
  // eslint-disable-next-line no-unused-vars
  const [visibleMovies, setVisibleMovies] = useState(10); 
  const [sortOption, setSortOption] = useState('rating'); 
  const moviesPerRow = 5;
  // eslint-disable-next-line no-unused-vars
  const rowsPerPage = 2;

  const [currentPage, setCurrentPage] = useState(1);
>>>>>>> 172c503c02261a2593b6cbbf23af016cc9f90ee7

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const apiKey = '17c82726588bd065f78c9991dde2a619';
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        // Ustawiamy wszystkie filmy pobrane z API
        setMovieData(data.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, []);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortMovies = (movies, option) => {
    switch (option) {
      case 'title-asc':
        return [...movies].sort((a, b) => a.original_title.localeCompare(b.original_title));
      case 'title-desc':
        return [...movies].sort((a, b) => b.original_title.localeCompare(a.original_title));
      case 'rating-desc':
        return [...movies].sort((a, b) => b.vote_average - a.vote_average);
      case 'rating-asc':
        return [...movies].sort((a, b) => a.vote_average - b.vote_average);
      case 'release-date-desc':
        return [...movies].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      case 'release-date-asc':
        return [...movies].sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
      default:
        return movies;
    }
  };

  const navigate = useNavigate();

  const handleNavigate = (index) => {
    navigate(`/details`, { state: { item: index } });
  };

  const handleLoadMore = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 10);
  };

  if (!movieData.length) {
    return <div>Loading...</div>;
  }

  const visibleMovieData = movieData.slice(0, visibleMovies);

  return (
    <>
      <Box p="4" width="100%" bg="gray.200">
        <Text>Popularne Filmy</Text>
        <Text>Sortuj</Text>
        <Select value={sortOption} onChange={handleSortChange}>
          <option value="title-asc">Sortuj A-Z</option>
          <option value="title-desc">Sortuj Z-A</option>
          <option value="rating-desc">Sortuj po ocenie malejąco</option>
          <option value="rating-asc">Sortuj po ocenie rosnąco</option>
          <option value="release-date-desc">Sortuj po dacie premiery malejąco</option>
          <option value="release-date-asc">Sortuj po dacie premiery rosnąco</option>
        </Select>
      </Box>

      <Grid templateColumns={`repeat(${moviesPerRow}, 1fr)`} gap={4}>
        {sortMovies(visibleMovieData, sortOption).map((movie, index) => (
          <Box key={index}>
            <Link to={`/details/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </Box>
        ))}
      </Grid>

      <Button onClick={handleLoadMore} mt={4} variant="outline">
        Więcej
      </Button>
    </>
  );
};

export default MovieList;
