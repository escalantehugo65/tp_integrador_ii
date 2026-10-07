import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();

  async function handleLogout() {
    await fetch("http://localhost:3000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    localStorage.removeItem("isLogged");
    navigate("/login");
  }

  return (
    <nav className="flex items-center justify-between bg-blue-600 px-6 py-4 text-white">
      <h1 className="text-xl font-bold">Mi Blog</h1>

      <button
        type="button"
        onClick={handleLogout}
        className="rounded bg-red-500 px-3 py-1 hover:bg-red-600"
      >
        Cerrar sesión
      </button>
    </nav>
  );
}

export default Navbar;