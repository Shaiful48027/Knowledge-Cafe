
import './App.css'
import Blog from './components/Blog/Blog'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/Bookmarks/BookMarks'
import Header from './components/header/Header'

function App() {
  return (
    <>


      <Header></Header>
      
      <div className='md:flex mx-8'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
        <Blog></Blog>
      </div>


    </>
  )
}


export default App
