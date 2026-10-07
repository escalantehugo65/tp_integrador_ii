function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-600 px-6 py-4 text-white">
      <h1 className="text-xl font-bold">Mi Blog</h1>

      <div className="flex gap-4">
        <a href="/" className="hover:text-blue-200">
          Inicio
        </a>

        <button
          type="button"
          className="rounded bg-red-500 px-3 py-1 hover:bg-red-600"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}

export default Navbar;