import { useState } from "react";
import { Link, useNavigate } from "react-router";
import useForm from "../hooks/useForm";

function LoginPage() {
  const navigate = useNavigate();
  const { form, handleInputChange } = useForm({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const respuesta = await fetch(
        "http://localhost:3000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(form),
        }
      );

      const datos = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(datos.message || "No se pudo iniciar sesión");
      }

      localStorage.setItem("isLogged", "true");
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto mt-10 max-w-md rounded-md border p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Iniciar sesión</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          placeholder="Correo electrónico"
          required
          className="rounded border p-2"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
          placeholder="Contraseña"
          required
          className="rounded border p-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          {loading ? "Ingresando..." : "Iniciar sesión"}
        </button>

        {error && <p className="text-red-600">{error}</p>}
      </form>

      <p className="mt-4">
        ¿No tenés una cuenta?{" "}
        <Link to="/register" className="text-blue-600">
          Registrate
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;