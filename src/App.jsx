
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { Main as Home } from "./component/Main/Main.jsx";
import { Shop } from "./pages/Shop/Shop.jsx";
import { NotFound } from "./pages/404.jsx";
import { Trending } from './pages/Trending/Trending.jsx'
import { PDP } from "./pages/PDP/PDP.jsx";


function App() {
  return (
    <>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/trending" element={<Trending />} />
          <Route path={`/pdp/:id`} element={<PDP />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
