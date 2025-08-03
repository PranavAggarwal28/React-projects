import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [custom, setCustom] = useState('')
  const buttonStyle = 'text-white mx-2 border-amber-50 border-2 rounded-2xl p-2 cursor-pointer';

  return (
    <>
      <div className='bg-black h-screen w-full flex justify-center'>
        <div className='flex flex-col '>
          <h1 className='text-white   text-2xl font-bold'>This is a Simple Counter app</h1>

          <div className='flex justify-center'>

            <input type="text"
              className='bg-white my-2 '
              value={custom}
              onChange={(e) => setCustom(e.target.value)} />
            <button className={buttonStyle}
              onClick={() => {
                if (custom <= 100 && custom>=0) {
                  setCount(parseInt(custom))
                }
                else alert("Number is greater than 10 or less than 0")
              }}>Add</button>
          </div>

          <div className='text-white text-center my-10 text-2xl '>{count}</div>

          <div className='flex justify-center'>
            <button className={buttonStyle}
              onClick={() => {
                if (count < 100) {

                  setCount(count + 1)
                }
              }}
            >Increase</button>
            <button className={buttonStyle}
              onClick={() => {
                if (confirm("Are you sure you want to reset?")) {
                  setCount(0)
                }
              }}>Reset</button>
            <button className={buttonStyle}
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1)
                }
              }}>Decrease</button>




          </div>
        </div>

      </div>
    </>
  )
}

export default App
