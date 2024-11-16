
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Main as Home } from "./component/Main/Main.jsx";
import { Shop } from "./pages/Shop/Shop.jsx";
import { NotFound } from "./pages/404.jsx";
import { Trending } from './pages/Trending/Trending.jsx'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
