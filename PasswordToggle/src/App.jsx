import { useState } from 'react'

// import './App.css'

function App() {
  const [hide, sethide] = useState(true)
  const [password,setPassword] = useState('')
  const button = hide ? 'show' : 'hide'
  const buttonStyle = 'text-white mx-2 border-amber-50 border-2 rounded-2xl p-2 cursor-pointer';


  return (
    <>
      <div className='h-screen w-full bg-black flex justify-center'>
        <div >
          <h1 className='text-white text-2xl font-bold'>Password Toggle App</h1>
          <div className='my-5'>
            <input className='bg-white border-2 my-2 ' type={hide ? 'password' : 'text'} 
              placeholder='Enter password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button
              className={buttonStyle}
              onClick={() => {
                sethide(!hide)

              }}>{button}</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
