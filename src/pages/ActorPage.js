
import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Button } from '@chakra-ui/react';
import ActorCard from '../components/ActorCard';
import MainTemplates from '../templetaes/MainTemplates';
import { useNavigate, Link } from "react-router-dom";

const useActorsData = (currentPage) => {
  const [actorsData, setActorsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2E1NWJmMTVmYzg0MDY4ZGQyZmQ4ZTJhY2Y0ZGYwMSIsInN1YiI6IjY0YzdmMzJiNjNlNmZiMDEzOGRhYzI4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kDgzzi2emOUKdMPAkIwFZEWX8fzVBPj2VLVafzjXfDg'
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = `https://api.themoviedb.org/3/person/popular?language=en-US&page=${currentPage}`;
        const response = await fetch(url, options);
        const data = await response.json();
        setActorsData(data.results);
        setTotalPages(data.total_pages);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  return { actorsData, isLoading, error, totalPages };
};

const ActorsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { actorsData, isLoading, error, totalPages } = useActorsData(currentPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const navigate = useNavigate();

  const handleNavigateActor = (index) => {
    navigate(`/DetailsActorPage`, { state: { item: index } });
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Ograniczamy wyświetlanie przycisków do 1, 2, 3 ... 500
  const visiblePages = Array.from({ length: totalPages }, (_, index) => index + 1).slice(
    Math.max(currentPage - 3, 0),
    Math.min(currentPage + 2, totalPages)
  );
console.log(actorsData);
  return (
    <MainTemplates>
      <SimpleGrid columns={5} spacing={4}>
        {actorsData.map((actor) => (
          <Link to={`/DetailsActorPage/${actor.id}`}>
        <Box key={actor.id}>
            <ActorCard actor={actor} />
          </Box></Link>
        ))}
      </SimpleGrid>

      <Box mt={4}>
        <Button onClick={handleFirstPage} disabled={currentPage === 1} variant="outline">
          Pierwsza strona
        </Button>
        <Button onClick={handlePreviousPage} disabled={currentPage === 1} variant="outline" ml={2}>
          Poprzednia strona
        </Button>
        {visiblePages.map((page) => (
          <Button
            key={page}
            onClick={() => setCurrentPage(page)}
            variant={page === currentPage ? 'solid' : 'outline'}
            ml={2}
          >
            {page}
          </Button>
        ))}
        <Button onClick={handleNextPage} disabled={currentPage === totalPages} variant="outline" ml={2}>
          Następna strona
        </Button>
        <Button onClick={handleLastPage} disabled={currentPage === totalPages} variant="outline" ml={2}>
          Ostatnia strona
        </Button>
      </Box>
    </MainTemplates>
  );
};


export default ActorsList;
