//     "https://api.themoviedb.org/3/movie/{movie_id}/lists"

const key = process.env.NEXT_PUBLIC_MOVIE_KEY;
console.log("key:", key);

export default async function handler(request, response) {
  const movies = await fetch(
    `https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=5?api_key=${process.env.NEXT_PUBLIC_REACT_API_KEY}`
  );
  console.log(movies);
  //

  const moviesJson = await movies.json();
  console.log("here", moviesJson);
  response.json(moviesJson);
}
//https://api.themoviedb.org/3/find/external_id?external_source=934433
//fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
