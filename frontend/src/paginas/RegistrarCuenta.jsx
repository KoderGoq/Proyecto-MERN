import { useState } from 'react';
import { Link } from "react-router-dom";
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';

const RegistrarCuenta = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();

        if ([nombre, email, password, repetirPassword].includes('')) {
            setAlerta({ msg: 'Todos los campos son obligatorios', error: true });
            return;
        }

        if (password !== repetirPassword) {
            setAlerta({ msg: 'Los password son incorrectos', error: true });
            return;
        }

        if (password.length < 8) {
            setAlerta({ msg: 'El password es muy corto, minimo 8 caracteres', error: true });
            return;
        }

        setAlerta({});

        // Crear el usuario en la API

        try {
            await clienteAxios.post('/veterinarios', { nombre, email, password })
            setAlerta({
                msg: 'Creado Correctamente, revisa tu email.',
                error: false
            });
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            });
        }
    }


    const { msg } = alerta;

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">Crea tu cuenta y Administra tus
                    <span className="text-black"> Pacientes</span>
                </h1>
            </div>

            <div className='mt-20 md:mt-5 shadow-lg px-3 py-5 rounded-xl bg-white'>
                {msg && <Alerta
                    alerta={alerta}
                />}

                <form onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Tu nombre
                        </label>
                        <input type="text" placeholder="Tu nombre" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={nombre} onChange={e => setNombre(e.target.value)} />
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Email
                        </label>
                        <input type="email" placeholder="Registra tu email" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Password
                        </label>
                        <input type="password" placeholder="Tu password" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Confirmar Password
                        </label>
                        <input type="password" placeholder="Confirma tu password" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={repetirPassword} onChange={e => setRepetirPassword(e.target.value)} />
                    </div>

                    <input type="submit" value="Crear Cuenta" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" />
                </form>

                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link className='block text-center my-5 text-gray-500' to="/">¿Ya tienes una cuenta? Inicia Sesion</Link>
                    <Link className='block text-center my-5 text-gray-500' to="/olvide-password">Olvide Password</Link>
                </nav>
            </div>


        </>
    )
}

export default RegistrarCuenta