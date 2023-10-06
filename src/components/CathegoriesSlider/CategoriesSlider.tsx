// import Slider from "react-slick";

import Card from "../card/Card"
import {arrayOfObjects}from'../Basket/Basketitem'
// import dataSlider from "../ProductSlider/Slider/dataSlider";

// import './categoriesSlider.css'
// import Slider from '../ProductSlider/Slider/Slider'

// using react-slick to create the Slider

export default function CategorieSlider () {
  // function NextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "red" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function PrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "green" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  return (
    <section className='flex justify-center flex-col bg-black '>

      <div className='m-5 bg-slate-500 flex justify-center border gap-2'>
        <h2 className='h2 divide-red-50 bg-black '>Categories</h2>
        <h2 className='h2 '>Filter</h2>

      </div>
      <Card img={arrayOfObjects.productList[0].image} itemName={"oe"} ownerName={"js"} pickupAddress={"fas"} />
      {/* <Slider /> */}
    </section>)
}
