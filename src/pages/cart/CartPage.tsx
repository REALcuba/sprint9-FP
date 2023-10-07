// import React from 'react'
import Basketitem from "../../components/Basket/Basketitem"
import Header from "../../components/Header/Header"
const CartPage = () => {
    return (
        <>
            <Header />
            <Basketitem deleteItem={function (): void {
                throw new Error("Function not implemented.")
            }} setProducts={function (products: { id: number; image: string; itemName: string; ownerName: string; pickupAddress: string }[]): void {
                console.log(products)

                throw new Error("Function not implemented.")
            }} productList={[]} />
        </>
    )
}

export default CartPage