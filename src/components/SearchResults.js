import React, { useState } from 'react';
import { Input, Button, Box, Stack, Select } from '@chakra-ui/react';
import { useNavigate, Link } from "react-router-dom";

const SearchResults = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movieData, setMovieData] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const navigate = useNavigate();




  const handleNavigate = (index) => {
    navigate(`/details`, { state: { item: index } });
  };

  const handleSearch = async () => {
    try {
      const apiKey = '17c82726588bd065f78c9991dde2a619';
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setMovieData(data.results);
        setSelectedMovieId(data.results[0].id); // Ustaw pierwszy film jako wybrany domyślnie
      } else {
        setMovieData([]);
        setSelectedMovieId(null);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setMovieData([]);
      setSelectedMovieId(null);
    }
  };

  return (
    <Box>
      <Stack direction="row" spacing={2} mb={2} alignItems="center">
        <Input
          w="50%"
          size="md"
          type="text"
          placeholder="Szukaj..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          list="movie-suggestions"
        />
        <Button colorScheme="teal" onClick={handleSearch}>
          Szukaj
        </Button>
      </Stack>

      {selectedMovieId && (
        <Box my={1}>
          <Select
            value={selectedMovieId}
            onChange={(e) => setSelectedMovieId(e.target.value)}
          >
            {movieData.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.title}
              </option>
            ))}
          </Select>
          {selectedMovieId && (
            <Link to={`/details/${selectedMovieId}`}>
<Button>Zobacz więcej</Button>            </Link>
          )}

        </Box>
      )}
    </Box>
  );
};

export default SearchResults;
