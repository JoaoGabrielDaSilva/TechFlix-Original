import React, { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useHistory } from 'react-router-dom';

import SearchServices from '../services/SearchServices'

const searchContext = createContext({} as any)



export const SearchProvider: React.FC = ({children}: any) => {
    
    const [inputValue, setInputValue] =  useState('')
    const history = useHistory()

    const handleChange = (event: any) => {
      setInputValue(event.target.value)
     
      if (event.target.value.length === 0) {
          return history.push("/")
      }

      return history.push('movie-search')
    }

    const getMovies = async () => {
        try {
            const response = await SearchServices.search(inputValue)
            
            const formattedData = response.map((movie: any) => {
                let voteAverageColor;

                switch(true) {
                case movie.vote_average > 6: 
                    voteAverageColor = 'green'
                    break
                case movie.vote_average < 6 && movie.vote_average > 3.5:
                    voteAverageColor = 'yellow'
                    break
                case movie.vote_average < 3.5:
                    voteAverageColor = 'red'
                    break
                }

                return {
                    id: movie.id,
                    genreIds: movie.genre_ids,
                    overview: movie.overview,
                    posterPath: movie.poster_path,
                    title: movie.original_title,
                    releaseDate: movie.release_date,
                    voteAverageColor,
                    voteAverage: movie.vote_average,
                    backdropPath: movie.backdrop_path
                }
            })
            return formattedData
        } catch (error) {
            console.log(error)
        }
    }

    return <searchContext.Provider value={{inputValue, handleChange, getMovies}}>
        {children}
    </searchContext.Provider>
}

export const useSearch = () => {
    const context = useContext(searchContext)

    return context;
}

