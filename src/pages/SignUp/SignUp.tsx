// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// import './style.css'

// function Signup () {
//   // const navigate = useNavigate()

//   const [usernameReg, setUsernameReg] = useState('')
//   const [emailReg, setEmailReg] = useState('')
//   const [cityReg, setcityReg] = useState('')
//   const [countryReg, setcountryReg] = useState('')
//   const [usernamesReg, setusernamsReg] = useState('')
//   const [passwordReg, setpasswordReg] = useState('')
//   const [rigisterError, setRigester] = useState(false)

//   const Register = (e) => {
//     e.preventDefault()

//     // to clear the input after submited
//     e.target.reset()

//     // fetch('http://localhost:5000/users', {
//     //   method: 'POST',
//     //   body: JSON.stringify({
//     //     name: usernameReg,
//     //     email: emailReg,
//     //     city: cityReg,
//     //     country: countryReg,
//     //     username: usernamesReg,
//     //     password: passwordReg
//     //   }),
//     //   headers: { 'Content-type': 'application/json; charset=UTF-8' }
//     // })
//     // .then((res) => res.json())
//     // .then((data) => {
//     //   console.log(data)
//     //   setRigester(true)
//     // })
//   }

//   return (
//     <div className='Signup justify-center '>
//       <form
//         className='registration p-5 d-flex justify-content-center align-items-center'
//         onSubmit={Register}
//         method='POST'
//       >
//         <h1>Sign Up</h1>
//         <h3>Enter your personal details</h3>

//         <input
//           className='form-control'
//           type='text'
//           name='name'
//           placeholder=' Full name'
//           required
//           onChange={(e) => {
//             setUsernameReg(e.target.value)
//           }}
//         />

//         <input
//           className='form-control'
//           type='email'
//           name='email'
//           placeholder='Email'
//           required
//           onChange={(e) => {
//             setEmailReg(e.target.value)
//           }}
//         />

//         <input
//           className='form-control'
//           type='text'
//           name='city'
//           placeholder='City'
//           required
//           onChange={(e) => {
//             setcityReg(e.target.value)
//           }}
//         />

//         <input
//           className='form-control'
//           type='text'
//           name='country'
//           placeholder=' Country'
//           required
//           onChange={(e) => {
//             setcountryReg(e.target.value)
//           }}
//         />

//         <input
//           className='form-control'
//           type='text'
//           name='username'
//           placeholder='username'
//           required
//           onChange={(e) => {
//             setusernamsReg(e.target.value)
//           }}
//         />

//         <input
//           className='form-control'
//           type='password'
//           name='password'
//           placeholder='password'
//           required
//           onChange={(e) => {
//             setpasswordReg(e.target.value)
//           }}
//         />

//         <button type='submit'>Sign Up</button>
//         {rigisterError
//           ? (
//             <p className='text-success'>
//               <Link to='/login'> Successfully registered! Login here</Link>
//             </p>
//             )
//           : (
//             <Link to='/login'> Already registered? Login here</Link>
//             )}
//       </form>
//     </div>
//   )
// }

// export default Signup
