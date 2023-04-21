import React from "react";

import { Route, Routes } from "react-router";
import Home from "./Components/Home";

import NavBar from "./Components/NavBar";
import OrderConfirm from "./Components/OrderConfirm";
import OrderSummary from "./Components/OrderSummary";
import NoMatch from "./Components/NoMatch";
import Product from "./Components/Product";
import FeaturedProducts from "./Components/FeaturedProducts";
import NewProducts from "./Components/NewProducts";
import User from "./Components/User";
import UserDetail from "./Components/UserDetail";
import Admin from "./Components/admin";
import Profile from "./Components/Profile";
import { AuthProvider } from "./Components/auth";
import Login from "./Components/Login";
import RequiredAuth from "./Components/RequiredAuth";
const LazyAbout=React.lazy(()=>import('./Components/About'))
function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={
          <React.Suspense fallback='Loading....'>
            <LazyAbout  />
          </React.Suspense>
        }></Route>
        <Route path="order-confirm" element={<OrderConfirm />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="product" element={<Product />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="feature" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<User />}>
          <Route path=":userId" element={<UserDetail />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<RequiredAuth><Profile/></RequiredAuth>}></Route>
        <Route path="login" element={<Login/>}></Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
