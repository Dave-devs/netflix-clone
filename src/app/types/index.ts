 export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  description: string;
  image: string;
  trailer: string;
  duration: number;
  director: string;
  actors: string[];
  category: string;
  reviews: Review[];
}
interface Review {
  id: number;
  rating: number;
  comment: string;
  user: string;
}

export interface MovieCategory {
  id: string;
  name: string;
  movies: Movie[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}
