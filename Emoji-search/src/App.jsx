import { useEffect, useState } from 'react'
import { emojiList } from './data/data'


function App() {
  const [search, setSearch] = useState('')
  const [emojis, setEmoji] = useState([])

  const searchBtn = (e) => {
    e.preventDefault()
    const matchedEmoji = ''
    const result = emojiList.filter((emojis) => search.toLowerCase() === emojis.keyword.toLowerCase())
    if (result) {
      setEmoji(result.map((item)=>item.emoji))
    }
    else {
      setEmoji([])
    }

  }

  return (
    <>
      <div className='h-screen w-full bg-[#A2AF9B]'>
        <h1 className='text-center text-5xl font-bold mb-10'>Emoji Finder </h1>
        <div className='flex justify-center '>
          <div>
            <form onSubmit={searchBtn}>
              <input type="text"
                className='bg-white border-1 w-64 h-10 mr-5 p-2'
                placeholder='Enter keyword'
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
              <button className='border-2 h-10 w-10 cursor-pointer bg-[#EEEEEE]'

                type='submit'>🔍</button>
            </form>
          </div>


        </div>
        <div className='Emojis h-10 w-full'>
          <div className='text-center text-8xl my-10'
          >
            {emojis.length>0?(emojis.map((emoji,index)=>(<span key={index}>{emoji}</span>))):(<span>No Emoji found</span>)}

          </div>
        </div>

      </div>
    </>
  )
}

export default App
