import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import HomeBody from "./routes/Home/HomeBody"
import Products from "./routes/Home/Products"
import AboutUs from "./routes/Home/AboutUs"
import Computers from "./routes/Home/Products/Computers"
import Eletronics from "./routes/Home/Products/Eletronics"
import Books from "./routes/Home/Products/Books"
import NotFound from "./routes/Home/NotFound"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Computers />} />
            <Route path="computers" element={<Computers />} />
            <Route path="eletronics" element={<Eletronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
