import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Home from "./routes/Home"
import Promotion from "./routes/Home/Promotion"
import Subscription from "./routes/Home/Subscription"
import HomeBody from "./routes/Home/HomeBody"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="promotion" element={<Promotion />} />
        </Route>
        <Route path="subscription" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
