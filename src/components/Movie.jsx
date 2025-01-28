export default function Movie({ movie }) {
  return (
    <>
      <p className="text-white">{movie.title}</p>
      <p className="text-white">{movie.id}</p>
    </>
  );
}
