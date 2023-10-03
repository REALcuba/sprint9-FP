import SearchBar from '../SearchBar/SearchBar'
// import dataSlider from '../ProductSlider/Slider/dataSlider'

import { JSXElementConstructor } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchSection = (): React.ReactElement<any, string | JSXElementConstructor<any>> => {
  return (
    <section className=' mx-5 flex justify-center items-center h-52 '>
      <div className=' container bg-themeColor flex flex-col h-full space-y-2 my-2'>
        <div className='flex gap-2 sm:place-content-center justify-center items-center flex-col  mt-5 p-2  md:border-box text-white'>
          <h4 className='text-center'>Give away things that you don't need for those who</h4>
          <h1 className='h1 text-green-400'>NEED IT</h1>
        </div>
        <SearchBar placeholder='Search your need...' />
      </div>
    </section>
  )
}

export default SearchSection
