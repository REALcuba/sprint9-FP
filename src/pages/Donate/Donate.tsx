import { useState } from 'react'
import Header from '../../components/Header/Header'
// import { Link } from "react-router-dom";

const Donate: React.FC = () => {
  //   const [productInfo, setProductInfo] = useState("");
  const [product, setProduct] = useState('')
  const [status, setStatus] = useState('')
  const [description, setDescription] = useState('')
  const [cathegory, setCathegory] = useState('')
  // const [pictures, setPictures] = useState([])

  // const selectedFile = useRef()
  // const uploader: () => Promise<void> = async () => {
  //   // console.log(name);
  //   console.log(selectedFile)
  // }

  return (
    <>
      <Header />
      <section className=' flex justify-center items-center '>
        <form className='loginmember flex flex-col w-3/5'>
          <h1>Donate your product</h1>
          <label htmlFor='product' className='form-label'>
            Nombre del producto:
          </label>
          <input
            className='form-input'
            type='title'
            placeholder='Nombre del producto'
            required
            onChange={(e) => {
              setProduct(e.target.value)
              console.log(product)
            }}
          />
          <label htmlFor='status' className='form-label'>
            Status:
          </label>
          <input
            className='form-control'
            type='status'
            placeholder='Status'
            required
            onChange={(e) => {
              setStatus(e.target.value)
              console.log(status)
            }}
          />
          <label htmlFor='cathegory' className='form-label'>
            Categoria:
          </label>
          <input
            className='form-control'
            type='text'
            placeholder='Categoria'
            required
            onChange={(e) => {
              setCathegory(e.target.value)
              console.log(cathegory)
            }}
          />
          <label htmlFor='description' className='form-label'>
            Descripción:
          </label>
          <input
            className='form-control'
            type='description'
            placeholder='descripción'
            required
            onChange={(e) => {
              setDescription(e.target.value)
              console.log(description)
            }}
          />
          <label htmlFor='pic' className='form-label'>
            Imagen:
          </label>
          <input
            className='form-control'
            type='file'
            // ref={selectedFile}
            placeholder='sube tus fotos'
            required
          // onChange={(event: ChangeEventHandler) => {
          //   setPictures(event.target.value)
          //   console.log(pictures)
          // }}
          />
          {/* <h2>{productInfo}</h2> */}
          <button
            className='border'
          // onClick={uploader}
          >Donate
          </button>

          {/* <Link to="/Register">Not member yet? signup here</Link> */}
        </form>
      </section>
    </>
  )
}

export default Donate
