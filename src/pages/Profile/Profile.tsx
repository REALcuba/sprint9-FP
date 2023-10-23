
// style
// import './profile.css'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import blank from '../../assets/img/blank.jpg'
// import DonateBtn from '../../components/DonateBtn/DonateBtn'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
// import { supabase } from '../../supabase/supabase'
import useAuthStore from '../../store/UseStore'
import { supabase } from '../../supabase/supabase'
// import { useState } from 'react'
// import { useState } from 'react'
const Profile: React.FC = () => {
  const { data } = useAuthStore()
  // const { avatarUrl, setAvatarUrl } = useState(blank)
  let avatarUrl = ""
  // const name = 'Angel'
  const handleAvatarInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (file) {
      try {
        // Sube el archivo al bucket 'avatar' en Supabase Storage
        const { data, error } = await supabase.storage
          .from('avatars')
          .upload(`avatar_${Date.now()}.png`, file)

          if (error) {
            console.error(error.message)
            return
          }
        avatarUrl = URL.createObjectURL(file)
        // Obtiene la URL del archivo subido y la muestra en la interfaz
        // const fileUrl = `${supabase.storage}/avatar/${file}`
        return 


      } catch (error) {
        console.error(error)
      }
    }
  }
  return (
    <>

      <Header />
      <div className='max-w-lg mx-auto'>
        {/* <div className='flex flex-col '> */}

        <section className='bg-themeColor  flex flex-col '>
          <div className='profileDetails '>
            <Stack direction='row' spacing={2} className='p-2 flex justify-end items-center'>
              <h3 className='text-green-400'>Hi {data?.session?.user.user_metadata.user_name}</h3>
              <Avatar src={avatarUrl ? avatarUrl : blank} />
              <label htmlFor="avatar">
                <span>upload avatar</span>
                <input id='avatar' type='file' onChange={handleAvatarInputChange}></input>
              </label>
            </Stack>
            <div className='userDataWraper'>
              <div>
                <div className='userData'>

                  <h3>{data?.session?.user.user_metadata.user_name}</h3>
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
