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
    // logBtn,
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
        if (setting === 'Profile' && !isLoggedIn) {
            alert('please Login')
            setShowLoginModal(true)

            // navigate('/profile')
        } else if (setting === 'Donate' && !isLoggedIn) {
            alert('please Login')
            setShowLoginModal(true)
        // navigate('/donate')
        } else if (setting === 'login' && !isLoggedIn) {
            // Mostrar el LoginModal cuando 'setting' es 'login' y el usuario no está logueado
            setShowLoginModal(true)

        } else if (setting === 'logOut' && isLoggedIn) {
            logOut()
            navigate(`/`)
        } else {
            navigate(`/${setting}`)
        }
    }

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
