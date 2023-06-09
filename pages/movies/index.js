import Link from "next/link";

export default function Movies(props) {
  console.log(props);
  return (
    <>
      <h2>movies</h2>
      <ul>
        {props.movies.genres.map((genre, index) => {
          return (
            <li key={index}>
              <Link href={`/movies/list/${genre.name}`}>{genre.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const getMovies = async () => {
    const response = await fetch("http://localhost:3000/api/movies/");
    const movies = await response.json();
    return movies;
  };
  const movies = await getMovies();
  return { props: { movies: movies } };
}
