import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';

const Register = () => {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const [user,setUser] = useState({
        username:'',
        password:'',
        email:''
    })


    const updateUser = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const registerUser = () => {
        dispatch(register(user));
        history.push('/login')
    }

    return (
        <>
            <div className="bg-grey-lighter bg-landscape min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Registrarse</h1>
                    <input 
                        onChange={e => updateUser(e)}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Usuario" />

                    <input 
                        onChange={e => updateUser(e)}
                        type="text"
                        className="block border border-grey-500 w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Correo electrónico" />

                    <input 
                        onChange={e => updateUser(e)}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Contraseña" />
                    <button
                        onClick={registerUser}
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Crear cuenta</button>
                </div>

                <div className="text-white text-lg mt-6">
                    Ya tienes una cuenta?&nbsp;
                    <a className="no-underline cursor-pointer border-b border-blue font-bold text-blue"  onClick={() => history.push('/login')}>
                        Inicia sesión
                    </a>.
                </div>
            </div>
        </div>
        </>
    );
}

export default Register;
