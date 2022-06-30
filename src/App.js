import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './screens/About'
import { AllPosts } from './screens/AllPosts'
import { Contact } from './screens/Contact'
import { CreatePost } from './screens/CreatePost'
import { Home } from './screens/Home'
import { Login } from './screens/Login'
import { PostDetail } from './screens/PostDetail'
import { Signup } from './screens/Signup'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:postId/:userId" element={<CreatePost />} />
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
