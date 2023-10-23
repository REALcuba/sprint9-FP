// import React, { useEffect, useRef } from 'react'
// import Button from '@mui/material/Button'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/UseStore'

interface PageButtonProps {
    page: string;
    // isLoggedIn: boolean;
    logBtn: string | null;
    handleLoginModalOpen: () => void;
    // logout: () => void;

}

const NavMenuButton: React.FC<PageButtonProps> = ({
    page,
    // isLoggedIn,
    logBtn,
    handleLoginModalOpen,
    // logout,
}) => {
    const navigate = useNavigate()
    const { isLoggedIn, logOut } = useAuthStore()
    const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
        className: 'tex ',
        children: null,
        onClick: () => {
        if (page === 'cart') {
            navigate('/cart')
        } else if (page === 'products') {
            navigate('/products')
        } else if (page === 'login' && !isLoggedIn) {
            handleLoginModalOpen()
        } else if (page === 'logOut' && isLoggedIn) {
            logOut()
        }
        },
    }

    if (page === 'cart') {
        buttonProps.children = (
            <>
                <ShoppingCartOutlinedIcon />
                {page.toUpperCase()}
            </>
        )
    } else if (page === 'login' && !isLoggedIn) {
        buttonProps.children = logBtn?.toUpperCase()
    } else if (page === 'login' && isLoggedIn) {
        buttonProps.children = logBtn?.toUpperCase()
    } else {
        // Páginas distintas de 'cart', 'product', y 'login'
        buttonProps.children = page.toUpperCase()
    }

    return <button {...buttonProps} />
}

export default NavMenuButton

