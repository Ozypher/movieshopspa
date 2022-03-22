import { Cast } from "./Cast";
import { Genre } from "./Genre";
import { Trailer } from "./Trailer";

export interface MovieDetails {
    id: number;
    title: string;
    posterUrl: string;
    backdropUrl: string;
    rating: number;
    overview: string;
    tagline: string;
    budget: number;
    revenue: number;
    imdbUrl: string;
    tmdbUrl: string;
    releaseDate: string;
    runTime: number;
    price: number;
    genres: Genre[];
    trailers: Trailer[];
    casts: Cast[];
}