import { useState } from 'react'
// import Button from '@mui/material/Button'
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useNavigate } from 'react-router-dom'
import { MenuItem, Typography } from '@mui/material'
import useAuthStore from '../../store/UseStore'
import LoginModal from '../../pages/Login/LoginModal'

interface MenuButtonProps {
    setting: string;
    // isLoggedIn: boolean;
    logBtn: string | null;
    handleCloseUserMenu: () => void;
    // logout: () => void;
    // login: () => void;

}

const AvatarMenuButton: React.FC<MenuButtonProps> = ({
    setting,
    // isLoggedIn,
    logBtn,
    // handleCloseUserMenu,
    // logout,
}) => {
    const { isLoggedIn, logOut } = useAuthStore()
    const [showLoginModal, setShowLoginModal] = useState(false)

    const navigate = useNavigate() // Obtiene la ubicación actual
    const handleLoginModalClose = () => {
        setShowLoginModal(!showLoginModal)
        // console.log(showLoginModal)

    }
    const actionsInSetting = () => {
        if (setting === 'Profile') {
            navigate('/profile')
        } else if (setting === 'Donate' && !isLoggedIn) {
            navigate('/donate')
        } else if (setting === 'login' && !isLoggedIn) {
            // Mostrar el LoginModal cuando 'setting' es 'login' y el usuario no está logueado
            setShowLoginModal(true)
        } else {
            logOut()
            navigate('/')
        }
    }

    // const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    //     className: 'text-green-300 my-2 flex',
    //     // sx: sx,
    //     onClick: redirectToPage,
    //     children: null,


    // }

    // if (settings === 'cart') {
    //     buttonProps.children = (
    //         <>

    //             <ShoppingCartOutlinedIcon />
    //             {settings}

    //         </>
    //     )
    // } else if (settings === 'login' && !isLoggedIn) {
    //     // buttonProps.component = 'button'
    //     buttonProps.onClick = handleLoginModalOpen
    //     buttonProps.children = logBtn
    // } else if (settings === 'login' && isLoggedIn) {
    //     // buttonProps.component = 'button'
    //     buttonProps.onClick = logout
    //     buttonProps.children = logBtn
    // } else {
    //     // buttonProps.component = 'button'
    //     buttonProps.children =
    //         settings

    // }


    // Actualiza el valor de toRef cuando cambia la ubicación
    // useEffect(() => {
    //     toRef.current = location.pathname
    // }, [location.pathname])

    // return <Button {...buttonProps} />
    return (
        <>

            <MenuItem key={setting} onClick={actionsInSetting}>
                <Typography textAlign='center'>{setting}</Typography>
            </MenuItem>
            {showLoginModal && <LoginModal isOpen={showLoginModal} onClose={handleLoginModalClose} />}
        </>
    )
}

export default AvatarMenuButton
