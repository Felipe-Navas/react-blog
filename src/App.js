import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './screens/About'
import { AllPosts } from './screens/AllPosts'
import { Contact } from './screens/Contact'
import { CreatePost } from './screens/CreatePost'
import { Home } from './screens/Home'
import { PostDetail } from './screens/PostDetail'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/posts/:postId/:userId" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
