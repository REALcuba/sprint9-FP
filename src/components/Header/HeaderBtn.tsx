import React, { useEffect, useRef } from 'react'
import Button from '@mui/material/Button'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useNavigate } from 'react-router-dom'

interface PageButtonProps {
    page: string;
    isLoggedIn: boolean;
    logBtn: string | null;
    handleLoginModalOpen: () => void;
    logout: () => void;

}

const NavMenuButton: React.FC<PageButtonProps> = ({
    page,
    isLoggedIn,
    logBtn,
    handleLoginModalOpen,
    logout,
}) => {

    const navigate = useNavigate() // Obtiene la ubicación actual
    const redirectToPage = () => {
        if (page === 'cart') {
            navigate('/cart')
        } else if (page === 'login' && !isLoggedIn) {
            handleLoginModalOpen()
        } else if (page === 'login' && isLoggedIn) {
            logout()
        } else {
            navigate(`/${page}`)
        }
    }

    const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
        className: 'text-green-300 my-2 flex',
        // sx: sx,
        onClick: redirectToPage,
        children: null,



    }

    if (page === 'cart') {
        buttonProps.children = (
            <>

                <ShoppingCartOutlinedIcon />
                {page}

            </>
        )
    } else if (page === 'login' && !isLoggedIn) {
        // buttonProps.component = 'button'
        buttonProps.onClick = handleLoginModalOpen
        buttonProps.children = logBtn
    } else if (page === 'login' && isLoggedIn) {
        // buttonProps.component = 'button'
        buttonProps.onClick = logout
        buttonProps.children = logBtn
    } else {
        // buttonProps.component = 'button'
        buttonProps.children =
            page 

    }


    // Actualiza el valor de toRef cuando cambia la ubicación
    // useEffect(() => {
    //     toRef.current = location.pathname
    // }, [location.pathname])

    return <Button {...buttonProps} />
}

export default NavMenuButton
