import React, { useState } from 'react';
import MainTemplates from '../templetaes/MainTemplates';
import { ChakraProvider, Box, Grid, Text, Select } from '@chakra-ui/react';
import SeriesCard from '../components/SeriesCard';

const SeriesPage = () => {
  const [sortOption, setSortOption] = useState('rating-desc'); 

  const seriesData = [
    { id: 71712, name: 'The Good Doctor', vote_average: 8.2, first_air_date: '2021-04-05', poster_path: '/abc.jpg' },
    { id: 1408, name: 'House', vote_average: 8.7, first_air_date: '2004-11-16', poster_path: '/def.jpg' },
    { id: 121, name: 'Doctor Who', vote_average: 8.6, first_air_date: '2005-03-26', poster_path: '/ghi.jpg' },
    { id: 46952, name: 'The Blacklist', vote_average: 7.9, first_air_date: '2013-09-23', poster_path: '/jkl.jpg' },
    { id: 89393, name: '9-1-1: Lone Star', vote_average: 6.8, first_air_date: '2020-01-19', poster_path: '/mno.jpg' },
    { id: 1403, name: 'Marvel\'s Agents of S.H.I.E.L.D.', vote_average: 7.5, first_air_date: '2013-09-24', poster_path: '/pqr.jpg' },
    { id: 84958, name: 'Loki', vote_average: 8.9, first_air_date: '2021-06-09', poster_path: '/stu.jpg' },
    { id: 95057, name: 'Superman & Lois', vote_average: 7.8, first_air_date: '2021-02-23', poster_path: '/vwx.jpg' },
    { id: 155683, name: 'Chueco', vote_average: 6.5, first_air_date: '2022-01-05', poster_path: '/yz.jpg' },
    { id: 7869, name: 'The Penguins of Madagascar', vote_average: 7.6, first_air_date: '2008-11-29', poster_path: '/abc.jpg' },
    { id: 63401, name: 'We Bare Bears', vote_average: 7.9, first_air_date: '2015-07-27', poster_path: '/def.jpg' },
    { id: 57532, name: 'Paw Patrol', vote_average: 6.6, first_air_date: '2013-08-12', poster_path: '/ghi.jpg' },
    { id: 65334, name: 'Miraculous: Tales of Ladybug & Cat Noir', vote_average: 8.0, first_air_date: '2015-10-19', poster_path: '/jkl.jpg' },
    { id: 79744, name: 'The Rookie', vote_average: 8.0, first_air_date: '2018-10-16', poster_path: '/mno.jpg' },
    { id: 1911, name: 'Bones', vote_average: 7.8, first_air_date: '2005-09-13', poster_path: '/pqr.jpg' },
    { id: 51817, name: 'Teenage Mutant Ninja Turtles', vote_average: 7.9, first_air_date: '2012-09-28', poster_path: '/stu.jpg' },
    { id: 82856, name: 'The Mandalorian', vote_average: 8.5, first_air_date: '2019-11-12', poster_path: '/vwx.jpg' },
    { id: 62852, name: 'Billions', vote_average: 7.4, first_air_date: '2016-01-17', poster_path: '/yz.jpg' },
    { id: 80752, name: 'See', vote_average: 7.6, first_air_date: '2019-11-01', poster_path: '/abc.jpg' },
    { id: 34391, name: 'Ultimate Spider-Man', vote_average: 7.2, first_air_date: '2012-04-01', poster_path: '/def.jpg' },
  ];

  const sortSeriesData = (data, option) => {
   
    switch (option) {
      case 'title-asc':
        return [...data].sort((a, b) => a.name.localeCompare(b.name));
      case 'title-desc':
        return [...data].sort((a, b) => b.name.localeCompare(a.name));
      case 'rating-desc':
        return [...data].sort((a, b) => b.vote_average - a.vote_average);
      case 'rating-asc':
        return [...data].sort((a, b) => a.vote_average - b.vote_average);
      case 'release-date-desc':
        return [...data].sort((a, b) => new Date(b.first_air_date) - new Date(a.first_air_date));
      case 'release-date-asc':
        return [...data].sort((a, b) => new Date(a.first_air_date) - new Date(b.first_air_date));
      default:
        return data;
    }

  };

  const sortingOptions = [
    { value: 'title-asc', label: 'Sortuj A-Z' },
    { value: 'title-desc', label: 'Sortuj Z-A' },
    { value: 'rating-desc', label: 'Sortuj po ocenie malejąco' },
    { value: 'rating-asc', label: 'Sortuj po ocenie rosnąco' },
    { value: 'release-date-desc', label: 'Sortuj po dacie premiery malejąco' },
    { value: 'release-date-asc', label: 'Sortuj po dacie premiery rosnąco' },
  ];

  return (
    <div>
      <MainTemplates>
        <ChakraProvider>
          <Box p="4" width="100%" bg="gray.200">
            <Text>Popularne Seriale</Text>
            <Text>Sortuj</Text>
            <Select value={sortOption} onChange={(event) => setSortOption(event.target.value)}>
              {sortingOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Box>
          <Grid templateColumns={`repeat(5, 1fr)`} gap={4}>
            {sortSeriesData(seriesData, sortOption).map((series) => (
              <SeriesCard key={series.id} seriesId={series.id} />
            ))}
          </Grid>
        </ChakraProvider>
      </MainTemplates>
    </div>
  );
};

export default SeriesPage;
