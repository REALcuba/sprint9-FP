
// style
// import './profile.css'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import blank from '../../assets/img/blank.jpg'
// import DonateBtn from '../../components/DonateBtn/DonateBtn'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
const Profile: React.FC = () => {
  const name = 'Angel'
  return (
    <>

      <Header />
      <div className='max-w-lg mx-auto'>
        {/* <div className='flex flex-col '> */}

        <section className='bg-themeColor  flex flex-col '>
          <div className='profileDetails '>
            <Stack direction='row' spacing={2} className='p-2 flex justify-end items-center'>
              <h3 className='text-green-400'>Hi {name}</h3>
              <Avatar src={blank} sx={{ width: 56, height: 56 }} />
            </Stack>

            <div className='userDataWraper'>
              <div>
                <div className='userData'>

                  <h3>lorem</h3>
                  <div>bio</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link to='/donate'>
              {/* <DonateBtn /> */}
            </Link>
          </div>
          <div>user products</div>
        </section>
      </div>
    </>
    // </div>

  )
}

export default Profile
