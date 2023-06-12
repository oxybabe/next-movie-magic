import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function getMovies() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const genre = router.query.genre;

  useEffect(() => {
    async function movieList(genre) {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genre${genre}include_adult=false&include_video=false&language=en-US&page=10&sort_by=popularity.desc'&api_key=${process.env.NEXT_PUBLIC_REACT_API_KEY}`
      );
      const data = await response.json();

      setMovies(data.results);
    }

    movieList(genre);
  }, []);
  console.log(movies);
  return (
    <>
      <p>Movies by genre</p>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{`${movie.title}`}</li>
        ))}
      </ul>
    </>
  );
}

//CODE FROM SUNDAY
// export default function Genre({ film }) {
//   console.log(film);
//   return (
//     <div>
//       <h1>Movies by Genre</h1>
{
  /* <ul>
    {film.movies.map((movie, index) => (
      <li key={index}>{`${movie.title}`}</li>
    ))}
  </ul>; */
}
//     </div>
//   );
// }

// export const getStaticPaths = async () => {
//   return { paths: [{ params: { genre: "Action" } }], fallback: true };
// };

// export async function getStaticProps() {
//   const getMovie = async () => {
//     const response = await fetch("http://localhost:3000/api/movies/genre/");
//     const movies = await response.json();

//     return movies;
//   };

//   const movies = await getMovie();
//   return { film: { movies: movies } };
// }
//OLD CODE BELOW FROM FRIDAY

// export default function MovieGenre(props) {
//   const router = useRouter();
//   console.log(router.query);
//   const genre = router.query.genre;
//   console.log(genre);
//   return (
//     <>
//       <h1>GENRES</h1>
//       <ul>
//         {props.movies.map((item, index) => (
//           <li key={index}>{`${movie.title}`}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export async function getServerSideProps() {
//   // console.log(genre);
//   const getMovies = async () => {
//     const response = await fetch("http://localhost:3000/api/movies/genre/", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON(props),
//     });
//     const movies = await response.json();
//     return movies;
//   };
//   const movies = await getMovies();
//   return { props: { movies: movies } };
// }
