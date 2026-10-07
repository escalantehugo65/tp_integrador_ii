import useForm from "../hooks/useForm.js";

function RegisterPage (){
    const {form, handleInputChange} = useForm({username:"",first_name:"",last_name:"",email:"", password:""})
    const handleSubmit = (event)=>{
        event.preventDefault()
    }
    return (
        <div className="max-w-md mx-auto p-6 border border-gray-400 rounded-md shadow-md mt-10">
            <h1>Crear Cuenta</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label htmlFor="username" className="p-2">Nombre de Usuario</label>
                <input 
                type="text"
                value={form.username}
                onChange={handleInputChange}
                className="border border-gray-400 rounded-md p-2"
                id="username"
                name="username" 
                placeholder="Nombre de usuario"
                required
                />
                <label htmlFor="first_name" className="p-2">Ingrese su nombre</label>
                <input 
                type="text"
                value={form.first_name}
                onChange={handleInputChange}
                className="border border-gray-400 rounded-md p-2"
                id="first_name"
                name="first_name" 
                placeholder="Nombre"
                required
                />
                <label htmlFor="last_name" className="p-2">Ingrese su apellido</label>
                <input 
                type="text"
                value={form.last_name}
                onChange={handleInputChange}
                className="border border-gray-400 rounded-md p-2"
                id="last_name"
                name="last_name" 
                placeholder="Apellido"
                required
                />
                
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
                <input 
                type="password"
                value={form.password}
                onChange={handleInputChange}
                className="border border-gray-400 rounded-md p-2"
                id="contraseña"
                name="password"
                placeholder="Ingrese su contraseña"
                required />
                <button type="submit" className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700">Registrarse</button>
            </form>
        </div>
    );
};

export default RegisterPage