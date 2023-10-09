import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'

// interface ExpandButtonProps extends IconButtonProps {
//     expand: boolean;
//     position: string;
//     top: string;
//     right: string;
//     right: string;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//     const { expand, ...other } = props
//     return <IconButton {...other} />
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }))
export default function ProductCard({ img, itemName, ownerName, pickupAddress }: { img: string, itemName: string, ownerName: string, pickupAddress: string }) {
    const [isExpanded, setIsExpanded] = React.useState(false)
    const cardRef = useRef<HTMLDivElement | null>(null)
    const navigate = useNavigate()

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded)
    }
    console.log(isExpanded)

    const ExpandButton = () => (
        <button
            className={`ml-auto px-2 py-1 bg-gray-300 rounded-lg focus:outline-none hover:bg-gray-400 transition-colors ${isExpanded ? 'transform rotate-180' : ''
                }`}
            onClick={handleExpandClick}
            aria-label="show more"
        >
            <ExpandMoreIcon />
        </button>

    )
    const handleCardViewBtnClick = () => {
        // if (!isExpanded) {
        //     console.log(cardRef)
        navigate(`/product-info`)
        // }
    }
    const handleCardClick = () => {
        if (!isExpanded) {
            setIsExpanded(true)
        } 
    }

    const handleViewButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // Evita que el clic del botón se propague al contenedor de la tarjeta
        event.stopPropagation()
        handleCardViewBtnClick()
    }



    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                cardRef.current &&
                event.target instanceof Node &&
                !cardRef.current.contains(event.target)
            ) {
                setIsExpanded(false)
                // console.log(isExpanded)

            }
        }


        window.addEventListener('click', handleClickOutside)
        // window.addEventListener('dblclick', handleClickNavigate)

        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <Card sx={{ maxWidth: 300, minWidth: 250, position: 'relative' }} ref={(ref) => {
            if (ref) {
                cardRef.current = ref
            }
        }}
            onClick={handleCardClick}
        >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={itemName}
                subheader="September 14, 2016"
            />
            <CardMedia sx={{ maxHeight: 250, minHeight: 250, minWidth: 300, objectFit: 'contain' }}
                component="img"
                image={img}
                alt={itemName}

            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {itemName}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton>
                    {ExpandButton()}
                </IconButton>

            </CardActions>
            {/* Contenido adicional como una superposición semitransparente */}
            {isExpanded && (
                <div className="absolute h-72 inset-0 bg-gray-100 opacity-80 p-4"
                    onClick={handleExpandClick} 
                    // onDoubleClick={handleCardDoubleClick}

                >
                    <CardContent>
                    <Typography paragraph>Method:</Typography>

                        <Typography paragraph>
                            Owner name: {ownerName}
                        </Typography>
                        <Typography paragraph>
                            pickup Address:{pickupAddress}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className='bg-gray-300' onClick={handleViewButtonClick}>View</Button>
                    </CardActions>
                </div>
            )}

        </ Card>
    )
}