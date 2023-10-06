import React from 'react'
import Button from '@mui/material/Button'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

interface PageButtonProps {
    page: string;
    isLoggedIn: boolean;
    logBtn: string | null;
    handleLoginModalOpen: () => void;
    logout: () => void;
    // sx: { my: number, display: string, flexGrow: number }

}

const PageButton: React.FC<PageButtonProps> = ({
    page,
    isLoggedIn,
    logBtn,
    handleLoginModalOpen,
    logout,
    // sx
}) => {
    const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
        className: 'text-green-300 my-2 flex',
        // sx: sx,
        onClick: () => { },
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
        buttonProps.onClick = handleLoginModalOpen
        buttonProps.children = logBtn
    } else if (page === 'login' && isLoggedIn) {
        buttonProps.onClick = logout
        buttonProps.children = logBtn
    } else {
        buttonProps.children =
            page
    }

    return <Button {...buttonProps} />
}

export default PageButton
