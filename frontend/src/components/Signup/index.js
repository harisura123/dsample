import './index.css'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
function Signup() {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const onSign = event => {
        event.preventDefault()
        axios.post('http://localhost:3002/register', {username, email, password})
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }
    return(
        <div className='div_1'>
            <h1>Register</h1>
            <form className='div_2' onSubmit={onSign}>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' value={username} onChange={e => setUsername(e.target.value)}/>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' value={email} onChange={e => setEmail(e.target.value)}/>
                <label htmlFor='password'>Password</label>
                <input type='text' id='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit'>Signup</button>
                <p>Already have a Account?</p>
                <button type='submit'>
                <Link to='/login'>Login</Link>
                </button>
            </form>
        </div>
    )
}

export default Signup