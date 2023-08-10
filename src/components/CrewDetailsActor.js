import React, { useState } from 'react';
import { FetchPromise } from './FetchPromise';
import Slider from 'react-slick';
import { Spinner, Image, Box, Text, Card, Center } from '@chakra-ui/react';

const CrewDetailsActor = ({ actorid, series }) => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
  });

  let linkk = '';
  let link = '';

linkk = `https://api.themoviedb.org/3/person/${actorid}/movie_credits?language=PL`;

  link = `https://api.themoviedb.org/3/person/${actorid}/combined_credits?language=PL`;

  const alldata = FetchPromise(linkk);

  if (!alldata) {
    return <Spinner />;
  }

  // Sortowanie według parametru vote_average
  const sortedCast = alldata[0].cast.sort((a, b) => b.vote_average - a.vote_average);

  // Ograniczenie do pierwszych 10 elementów
  const top10Cast = sortedCast.slice(0, 20);

  return (
    <Box>
      <Slider {...settings}>
        {top10Cast.map((x) => (
          <Card key={x.id}>
            <Image
              boxSize="200px"
              src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${x.poster_path}`}
              alt=""
              borderRadius="1%"
            />
            <Text isTruncated>
              <Center>{x.original_title}</Center>
            </Text>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default CrewDetailsActor;
