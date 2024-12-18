
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/Bookmarks/BookMarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTimes, setReadingTime] = useState(0);

  const handleBmark = (blog, reading_time ) =>{
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);

    setReadingTime(reading_time + readingTimes)
  }
  
  return (
    <>

      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        
        <div className='md:flex gap-20 mx-8'>

          <Blogs handleBmark={handleBmark}></Blogs>

          <BookMarks bookmarks={bookmarks} readingTimes={readingTimes}></BookMarks>

        </div>
      </div>
      
    </>
  )
};


export default App
