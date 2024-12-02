import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, AuthContext } from "./Context/AuthContext.jsx";
import { Main as Home } from "./component/Main/Main.jsx";
import { Shop } from "./pages/Shop/Shop.jsx";
import { NotFound } from "./pages/404.jsx";
import { Trending } from "./pages/Trending/Trending.jsx";
import { PDP } from "./pages/PDP/PDP.jsx";
import { Cart } from "./pages/Cart/Cart.jsx";
import { Admin } from "./pages/Admin/Admin.jsx";
import { Login } from "./pages/Auth/Login.jsx";
import { Signup } from "./pages/Auth/Signup.jsx";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <AuthProvider>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path={`/pdp/:id`} element={<PDP />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider >
  );
}

export default App;
