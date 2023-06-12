// [id].js should list movie info for a particular film by movie_id
export default function MovieId() {
  return <h1>Films by ID</h1>;
}
// export const getServerSideProps = async () => {
//   return { paths: [{ params: { movieId: "" } }], fallback: true };
// };

export async function getServerSideProps() {
  const getMovies = async () => {
    const response = await fetch(
      "http://localhost:3000/pages/api/movies/movie/",
      {
        headers: {
          "Content-Type": "",
        },
        //   body: JSON(genre),
      }
    );
    const movies = await response.json();
    return movies;
  };
  const movies = await getMovies();
  return { props: { movies: movies } };
}
