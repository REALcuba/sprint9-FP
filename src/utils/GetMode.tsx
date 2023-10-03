import { useState } from 'react'

const toggleMode = (): void => {
  const [mode, setMode] = useState('light')

  if (mode === 'light') {
    setMode('dark')
  } else {
    setMode('light')
  }
}

export default toggleMode
