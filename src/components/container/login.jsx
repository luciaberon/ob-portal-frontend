import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';

const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch()

    const [user,setUser] = useState({
        username:'',
        password:''
    })

    const updateUser = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const loginUser = () => {
        dispatch(login(user))    
    }

    return (
        <div className="bg-grey-lighter bg-landscape min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Iniciar sesión</h1>
                    <input 
                        onChange={e => updateUser(e)}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Usuario" />

                    <input 
                        onChange={e => updateUser(e)}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Contraseña" />

                    <button
                        type="submit"
                        onClick={loginUser}
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Login
                    </button>


                </div>

                <div className="text-white text-lg mt-6">
                    No tienes una cuenta?&nbsp;
                    <a className="no-underline border-b border-blue font-bold" onClick={() => history.push('/register')}>
                        Regístrate
                    </a>.
                </div>
            </div>
        </div>
    );
}

export default Login;
