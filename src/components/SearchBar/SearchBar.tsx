import { ChangeEvent, useState } from 'react'
import FindReplaceIcon from '@mui/icons-material/FindReplace'
// style
import './searchBar.css'
// import searchGlass from '../../assets/svg/search-glass.svg'
// import X from '../../assets/svg/cancel-x.svg'

// import dataSlider from '../ProductSlider/Slider/dataSlider'
// import { Link } from "react-router-dom";

function Searchbar ({ placeholder }: { placeholder: string }): JSX.Element {
  const [searchValue, setsearchValue] = useState('')

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setsearchValue(event.target.value)
    // return searchWord
    // const newFilter = dataSlider.filter((value) => {
    //   return value.name.toLowerCase().includes(searchWord.toLowerCase())
    // })

    // if (searchWord === newFilter) {
    //   setsearch(search)
    // } else {
    //   // setFilteredData(newFilter);
    //   console.log(newFilter)
    // }
  }
  console.log(searchValue)

  // interface inputSearchProps {
  //   handleCancelSearch: () => void
  // }
  // const handleClick = (event, data) => {
  //   handleFilter(data.name)
  //   // const searchWord = event.target.value;
  //   // const newFilter = dataSlider.filter((value)=>{
  //   //   value.name.toLowerCase().includes(searchWord.toLowerCase());
  //   // });

  //   //  return
  //   //  <div>

  //   //     <ul>
  //   //       {dataSlider.map((data) => {
  //   //         if (handleFilter(data) === data.name) {
  //   //           <li className="container-sm " key={data.id}>
  //   //             {data.name}
  //   //           </li>;
  //   //         }
  //   //         console.log(event, data.name);
  //   //          return
  //   //       }
  //   //       )}
  //   //     console.log(data.name);
  //   //     </ul>;
  //   // </div>

  //   // if (data.includes(newFilter)){

  //   // }
  // }
  return (
    <div role='search' className=' self-center flex flex-col flex-wrap place-content-center'>
      <form className=' max-w-md mx-auto text-white '>
        <label htmlFor='search' className=' flex flex-col items-center gap-2'>
          <div className='relative flex items-center  w-full h-12 rounded-lg focus-within:shadow-lg focus-within:shadow-green-500 bg-slate-950 overflow-hidden'>
            <div className='grid place-items-center h-full w-12'>

              <FindReplaceIcon />
            </div>
            <input
              className='form-input rounded-md bg-slate-950 border-white focus:border-none px-2 peer h-full w-full outline-none text-sm text-gray-700 pr-2'
              type='search'
              placeholder={placeholder}
              onChange={handleSearch}
            />
          </div>
          {/* <div
            className='absolute rigth-0 w-6  justify-center h-6 rounded-md'
          // onClick={handleCancelSearch}
          >
            <img className='relative rounded-md ' src={X} alt='' />
          </div> */}
          <button
            className='searchBarBtn Btn focus-within:shadow-lg focus-within:shadow-green-500'
            value='search '
          // onClick={handleClick}
          >Search
          </button>
        </label>
      </form>
    </div>
  )
}

export default Searchbar
