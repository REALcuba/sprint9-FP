import * as React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import mainLogo from '../../assets/img/main_logo.png'
import nullAvatarIcon from '../../assets/img/blank.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import LoginModal from '../../pages/Login/LoginModal'
import useAuthStore from '../../store/UseStore'
import NavMenuButton from './NavMenuButton'
import AvatarMenuButton from '../avatarMenuBtn/AvatarMenuBtn'
// import { supabase } from '../../supabase/supabase'
// import { useRef } from 'react'

// const [user, setUser]=

function ResponsiveAppBar() {
    const { isLoggedIn, data, avatarUrl, } = useAuthStore()
    const logBtn = isLoggedIn ? 'logOut' : 'login'
    const pages = ['products', 'cart', logBtn]
    const settings = ['Profile', 'Donate', logBtn]

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
    const [showLoginModal, setShowLoginModal] = React.useState(false)
    // const [imageUrl, setImageUrl] = React.useState<null | string>(null)
    // const navigate = useNavigate()


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const handleLoginModalOpen = () => {
        setShowLoginModal(true)

    }

    const handleLoginModalClose = () => {
        setShowLoginModal(false)
    }
    // const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files?.[0]

    //     if (file) {
    //         try {
    //             // Sube el archivo al bucket 'avatar' en Supabase Storage
    //             const { data, error } = await supabase.storage
    //                 .from('avatar')
    //                 .upload(`avatar_${Date.now()}.png`, file)

    //             if (error) {
    //                 console.error(error.message)
    //             } else {
    //                 // Obtiene la URL del archivo subido y la muestra en la interfaz
    //                 const fileUrl = `${supabase.storage}/avatar/${file}`
    //                 setImageUrl(fileUrl)
    //             }
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    // }


    return (
        <AppBar position='static' >
            <Container maxWidth='xl' className='bg-slate-100 text-slate-500' >
                <Toolbar disableGutters className='text-slate-500'>
                    <Link to='/'>
                        <img src={mainLogo} alt='' className='w-20 hidden lg:flex  mr:1' />
                    </Link>
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='#app-bar-with-responsive-menu'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >
                        NEED IT
                    </Typography>
                    <img src={mainLogo} alt='' className='w-20 xs:flex sm:hidden md:flex lg:hidden mr: 1 ' />

                    <Typography
                        className='md:justify-center justify-end'
                        variant='h5'
                        noWrap
                        component='a'
                        href='#app-bar-with-responsive-menu'
                        sx={{
                            // mr: 2,
                            display: { xs: 'none', sm: 'flex', lg: "none", md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >
                        NEED IT
                    </Typography>

                    <Box className=" flex justify-end md:hidden flex-1"  >
                        <IconButton
                            sx={{ widht: 40, padding: 1, display: { xs: 'flex' }, justifyContent: { xs: 'flex-end' } }}
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <ShoppingCartOutlinedIcon
                                className='items-center'
                                sx={{
                                    display: { xs: 'flex', md: "none" },
                                }} />
                            <MenuIcon />
                        </IconButton >
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center'>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box className="justify-end  grow-1 md:flex hidden text-gray-300"
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}   >

                            {pages.map((page) => (
                                <NavMenuButton
                                    key={page}
                                    page={page}
                                    // isLoggedIn={isLoggedIn}
                                    logBtn={logBtn}
                                    handleLoginModalOpen={handleLoginModalOpen}
                                    // logout={logOut}
                                // sx={{ my: 2, display: 'flex', flexGrow: 1 }} // Pasamos sx como prop al componente PageButton
                                />
                            ))}


                    </Box>
                
                    <LoginModal isOpen={showLoginModal} onClose={handleLoginModalClose} />
                    {/* https://phkqavjpajcvvmforhno.supabase.co/storage/v1/object/public/avatar/avatar_1697475473779.png?t=2023-10-16T17%3A22%3A19.556Z */}
                    <Box className='w-16' sx={{ flexGrow: 0 }}>

                        <Tooltip title='Open settings' >
                            <IconButton className='w-12' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={data?.user?.email} src={avatarUrl ? avatarUrl : nullAvatarIcon} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id='menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => {
                                return <AvatarMenuButton setting={setting}
                                    logBtn={logBtn}
                                    key={setting}
                                    // isLoggedIn={isLoggedIn}
                                    // logout={logOut}
                                    handleCloseUserMenu={handleCloseUserMenu} />
                                // return (
                                // <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                //     <Typography textAlign='center'>{setting}</Typography>
                                //     </MenuItem>
                                // )
                            })}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
}
export default ResponsiveAppBar
