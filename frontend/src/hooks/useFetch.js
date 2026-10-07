import { useState, useEffect} from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(url, setData, setError, setLoading)
    }, [url]);
    return {
        data,
        loading,
        error,
    };
}

const fetchData = async (url, setData, setError, setLoading) => {
    setLoading(true);
    setError(null);
    try {
      const respuesta = await fetch(url, {
        credentials: "include",
      });

      if (!respuesta.ok) {
        throw new Error("No se pudieron obtener los datos ");
      }

      const datos = await respuesta.json();

      setData(datos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

export default useFetch;
