
import './slider.css'
import clotheImg from '../img/clothes.jpeg'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
// components
import dataSlider from './dataSlider'
import { ChangeEvent } from 'react'
// import BtnSlider from "./BtnSlider";

export default function Slider(): JSX.Element {
  const navigate = useNavigate()
  //   const [slideIndex, setSlideIndex] = useState(1)
  //   const[slideIndex, setSlideIndex] = useState([])

  //   const nextSlide = () => {
  //     if(slideIndex !== dataSlider.length){
  //         setSlideIndex(slideIndex + 1)
  //     } else if (slideIndex === dataSlider.length){
  //         setSlideIndex(1)
  //     }
  //   }

  //   const prevSlide = () => {
  // if (slideIndex !== 1) {
  //     setSlideIndex(slideIndex - 1)
  // } else if (slideIndex === 1){
  //    setSlideIndex(dataSlider.length)
  // }
  //   }
  type MouseEventHandler<T = Element> = (event: MouseEvent) => void
  const handleClick: MouseEventHandler<ChangeEvent> = (e) => {
    e.preventDefault()
    navigate('/product')
    console.log(e, 'click to category')
  }
  return (
    <>
      <Card />
      <div className='flex items-center '>
        <div className='flex flex-col sm:flex-row items-stretch'>
          {dataSlider.map((item) => (
            <div className='self-auto ' key={item.id} onClick={(e) => handleClick(e)}>
              <div>
                <h2 className='display-5'>{item.category}</h2>
                <img
                  className='rounded w-20 h-auto'
                  src={clotheImg}
                  alt={item.category}
                />
              </div>
            </div>
          ))}

          {/* <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
      <BtnSlider moveSlide={nextSlide} direction={"next"}/>
   */}
        </div>
      </div>
    </>
  )
}
