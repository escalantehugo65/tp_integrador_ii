import useFetch from "../hooks/useFetch";
import Navbar from "../components/navbar";

function HomePage() {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/articles"
  );

  return (
    <div>
      <Navbar/>
      
      <h1>Artículos de Blog</h1>

      {loading && <p>Cargando artículos...</p>}

      {error && <p>Ha ocurrido un error: {error}</p>}

      {!loading && !error && data?.length === 0 && (
        <p>No hay artículos publicados.</p>
      )}

      {!loading &&
        !error &&
        data?.map((article) => (
          <article key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <p>Autor: {article.author?.username}</p>
          </article>
        ))}
    </div>
  );
}

export default HomePage;