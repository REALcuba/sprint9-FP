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
      <section className=' flex justify-center items-center m-5 bg-green-300 rounded'>
        <form className='flex flex-col justify-center align-middle w-3/5 gap-3'>
          <h1 className='text-center text-lg'>Donate your product</h1>
          <label htmlFor='product' className='form-label'>
            Nombre del producto:
          </label>
          <input
            id='product'
            // name='product'
            className='rounded'
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
          <select
            id='status'
            name='status'
            className='rounded'
          // type='status'
            placeholder='Status'
            required
            onChange={(e) => {
              setStatus(e.target.value)
              console.log(status)
            }}
          > <option value="used">Used</option>
            <option value="new">New</option>
          </select>
          <label htmlFor='cathegory' className='form-label'>
            Categoria:
          </label>
          <select
            id='cathegory'
            // name='cathegory'
            className='rounded'
          // type='text'
            placeholder='Categoria'
            required
            onChange={(e) => {
              setCathegory(e.target.value)
              console.log(cathegory)
            }}
          >
            <option value="electronic">Electronic</option>
            <option value="furniture">Furniture</option>
            <option value="clothe">Clothe</option>
          </select>
          <label htmlFor='description' className='form-label'>
            Descripción:
          </label>
          <textarea
            id='description'
            className='rounded'
            // type='text'
            placeholder='describe tu producto'
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
            id='pic'
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
            className='border m-2 bg-green-500 rounded'
          // onClick={uploader}
          >Share it!
          </button>

          {/* <Link to="/Register">Not member yet? signup here</Link> */}
        </form>
      </section>
    </>
  )
}

export default Donate
