
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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value)
  }
  const handleSignUp = () => {
    if (isLoggedIn) return
    if (email === '' || password === '') {
      alert(`Please enter a valid: username and password`)
      console.log('Please enter a username')

    } else {
      // Llama a la función de login proporcionada por el hook
      signUp(email, password)
    }
  }

  const handleLogout = () => {
    // Llama a la función de logout proporcionada por el hook
    logOut()
  }
  const Register: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    handleSignUp()
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
    <div className='flex justify-center align-center gap 2'>
      <form className='loginmember d-flex flex-column' onSubmit={Register}>
        <h1>Sign up</h1>

        <input
          className='form-control'
          type='text'
          placeholder='example@example.com'
          required
          onChange={handleChange}
        />

        <input
          className='form-control'
          type='password'
          placeholder='password'
          required
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />

        <button type='submit' onClick={isLoggedIn ? handleLogout : handleSignUp}>
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
