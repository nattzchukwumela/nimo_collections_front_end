import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Main } from "./component/Main/Main.jsx";
import { Men } from "./pages/Men/Men.jsx";
import { Women } from "./pages/Women/Woman.jsx";
import { Children } from "./pages/Children/Children.jsx";
import { NotFound } from "./pages/404.jsx";
import { Trending } from './pages/Trending/Trending.jsx'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/children" element={<Children />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
