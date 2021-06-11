export interface Movie {
    id: number;
    genreIds: number[];
    overview: string;
    posterPath: string;
    title: string;
    releaseDate: string;
    voteAverageColor: string;
    voteAverage: number;
    backdropPath: string;
}