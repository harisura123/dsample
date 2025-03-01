import './index.css'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'
function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [serror, setErr] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const onLogin = e => {
        e.preventDefault()
        axios.post('https://dsample-api.vercel.app/login', {username, password})
        .then(result => {
            console.log(result.data)
            if (result.data === 'Success'){
                navigate('/')
            }else{
                setErr(result.data)
            }
        })
        .catch(err => console.log(err))
    }
    return(
        <div className='div_1'>
            <h1>Login</h1>
            <form className='div_2' onSubmit={onLogin}>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' value={username} onChange={e => setUsername(e.target.value)}/>
                <label htmlFor='password'>Password</label>
                <input type='text' id='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit'>Login</button>
                <p>Already have a Account?</p>
                <button type='submit'>
                <Link to='/signup'>SignIn</Link>
                </button>
                <p>{serror}</p>
            </form>
        </div>
    )
}

export default Login
