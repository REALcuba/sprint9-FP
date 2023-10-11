
import { useState } from 'react'
// import './loginForm.css'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/UseStore'

const SignUp: React.FC = () => {
  const navigate = useNavigate()

  // const [email, setEmail] = useState('')
  // const [passwordReg, setpasswordReg] = useState('')
  // const [anthenError, setAntenError] = useState(false)
  const { isLoggedIn, signUp, logOut } = useAuthStore()
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserEmail(e.target.value)
  }
  const handleLogin = () => {
    if (isLoggedIn) return
    if (userEmail === '' || userPassword === '') {
      alert(`Please enter a valid: username and password`)
      console.log('Please enter a username')

    } else {
      // Llama a la función de login proporcionada por el hook
      signUp(userEmail, userPassword)
    }
  }

  const handleLogout = () => {
    // Llama a la función de logout proporcionada por el hook
    logOut()
  }
  const Register: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    handleLogin()
    // fetch('http://localhost:5000/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: emailReg,

    //     password: passwordReg
    //   }),
    //   headers: { 'Content-type': 'application/json; charset=UTF-8' }
    // })
    //   .then(async (res) => await res.json())
    //   .then((data) => {
    //     console.log(data.isAuthenticated)
    //     setAntenError(true)
    //     if (data.isAuthenticated) {
    //       navigate('/')
    //     } else if (data.error === 'Password incorrect') {
    //     } else {
    //       navigate('/Register')
    //     }
    //   })
  }

  return (
    <div className='loginform d-flex justify-content-center align-items-center'>
      <form className='loginmember d-flex flex-column' onSubmit={Register}>
        <h1>Sign up</h1>

        <input
          className='form-control'
          type='text'
          placeholder='username'
          required
          onChange={handleChange}
        />

        <input
          className='form-control'
          type='password'
          placeholder='password'
          required
          onChange={(e) => {
            setUserPassword(e.target.value)
          }}
        />

        <button type='submit' onClick={isLoggedIn ? handleLogout : handleLogin}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        {isLoggedIn
          ? <>{navigate('/')}</>

          : (
            <>
              <Link to='/'>Already a  memebr? Login here</Link>
            </>
          )}
      </form>
    </div >
  )
}

export default SignUp
