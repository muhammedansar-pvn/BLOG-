import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Signup from "./Components/Signup"
import CreateBlog from"./Components/CreateBlog"
import BlogList from "./Components/BlogList"
import Signin from "./Components/Signin"
function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/createBlog" element={<CreateBlog/>}/>
      <Route path="/blogList" element={<BlogList/>}/>
    </Routes>
  )
}

export default App
