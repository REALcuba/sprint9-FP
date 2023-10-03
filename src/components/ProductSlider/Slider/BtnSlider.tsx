// import "./Slider.css";
import leftArrow from '../img/back-to.png'
import rightArrow from '../img/next-page.png'
import { buttonProps } from '../../../types/types.d'

const BtnSlider: React.FC<buttonProps> = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <img
        src={direction === 'next' ? rightArrow : leftArrow}
        alt=''
      />
    </button>
  )
}
export default BtnSlider
