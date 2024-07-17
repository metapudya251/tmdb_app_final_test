import axios from "axios";

const headers = {
  accept: "application/json",
  Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2M5OWQ1OWI1N2FhY2YxZTc2NmJjNzg3ZDQzYTlhMyIsInN1YiI6IjY0YmQyM2JmZWI3OWMyMDBjNWRhMjY4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.03XEmHZDdjsPt-Edsc320Zwa-fFNg4aKRrzCqYSYDy8`,
};

const apiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers,
});

export { apiMovie };
