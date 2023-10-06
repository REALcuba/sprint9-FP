// import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
// import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import useAuthStore from '../../store/UseStore'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    // const [open, setOpen] = React.useState(false)
    // const handleOpen = () => setOpen(true)
    // const handleClose = () => setOpen(false)
    const { isLoggedIn, user, login, logout } = useAuthStore()
    const [username, setUsername] = useState('')
    const [userPassword, setUserPassword] = useState('')
    // const [username, setUsername] = useState('')
    // const [userPassword, setUserPassword] = useState('')
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setUsername(e.target.value)
    }
    const handleLogin = () => {
        if (isLoggedIn) return
        if (username === '' || userPassword === '') {
            alert(`Please enter a valid: username and password`)
            console.log('Please enter a username')

        } else {
            // Llama a la función de login proporcionada por el hook
            login(username, userPassword)


        }
    }
    const handleLogout = () => {
        // Llama a la función de logout proporcionada por el hook
        logout()
    }
    const Register: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        handleLogin()
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpen}
                onClose={onClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={isOpen}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Enter your email
                        </Typography>
                        <form action="" className='loginmember d-flex flex-column' onSubmit={Register}>
                            <h1>Member Login</h1>

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
                            {/* {isLoggedIn
                                ? (
                                    <>
                                        <p>Is logged in: {isLoggedIn ? 'Yes' : 'No'}</p>
                                        {isLoggedIn && <p>Welcome, {user?.username}</p>}
                                    </>
                                )
                                : (
                                    <Link to='/Register'>Not member yet? signup here</Link>
                                )} */}
                        </form>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {isLoggedIn
                                ? (
                                    <>
                                        <p>Is logged in: {isLoggedIn ? 'Yes' : 'No'}</p>
                                        {isLoggedIn && <p>Welcome, {user?.username}</p>}
                                    </>
                                )
                                : (
                                    <Link to='/Register'>Not member yet? signup here</Link>
                                )}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}