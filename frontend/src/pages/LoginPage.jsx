import useFetch from "../hooks/useFetch.js";
import useForm from "../hooks/useForm.js";

function LoginPage (){
    const {form, handleInputChange} = useForm({email:"", password:""})
    const handleSubmit = (event)=>{
        event.preventDefault()
    }

    const {} = useFetch(url, "PUT")
    return (
        <div className="max-w-md mx-auto p-6 border border-gray-400 rounded-md shadow-md mt-10">
            <h1>Login</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label htmlFor="email" className="p-2">Email</label>
                <input 
                value={form.email}
                onChange={handleInputChange}
                className="border border-gray-400 rounded-md p-2"
                id="email"
                type="email"
                name="email" 
                placeholder="Ingrese su correo"
                required
                />
                <label htmlFor="contraseña" 
                className="p-2">Contraseña</label>
                <input type="password"
                value={form.password}
                onChange={handleInputChange}
                className="border border-gray-400 rounded-md p-2"
                id="contraseña"
                name="password"
                placeholder="Ingrese su contraseña"
                required />
                <button type="submit" className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default LoginPage