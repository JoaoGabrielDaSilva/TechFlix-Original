import React from 'react';
import { useEffect } from 'react';
import { Movie } from '../../libs/movie';

import { Container, MovieImage, Title, OverView, GenreWrapper, Genre, Note, InfoWrapper, ImageWrapper } from './styles';

import SearchServices from '../../services/SearchServices'
import { useState } from 'react';

const MovieDetails: React.FC = ({history}: any) => {


  const data: Movie = (history.location.state)

  const [genreArray, setGenreArray] = useState<string[]>([])

  const getGenres = async () => {
    try {
      const response = await SearchServices.getGenres()
      const genreIds = data.genreIds
        
      genreIds.forEach(id => {
        return response.forEach((genre: any) => {
          if (genre.id === id) {
            setGenreArray([...genreArray, genre.name])
          }
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getGenres()
  }, [])

  return <Container>
    <ImageWrapper>
      <MovieImage src={`https://image.tmdb.org/t/p/w500${data.posterPath}`}/>
      <Note color={data.voteAverageColor}>{data.voteAverage}</Note>
    </ImageWrapper>
    <InfoWrapper>
      <Title>{data.title}</Title>
      <OverView>{data.overview}</OverView>
    </InfoWrapper>
    <GenreWrapper>
      {genreArray.map(genre => {
        return <Genre key={genre}>{genre}</Genre>
      })}
    </GenreWrapper>
  </Container>;
}

export default MovieDetails;