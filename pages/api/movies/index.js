const key = process.env.NEXT_PUBLIC_MOVIE_KEY;
console.log("key:", key);

export default async function handler(request, response) {
  const movies = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_REACT_API_KEY}`
  );

  const moviesJson = await movies.json();
  console.log("here", moviesJson);
  response.json(moviesJson);
}
