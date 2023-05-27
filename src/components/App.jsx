

import { Routes, Route } from "react-router-dom"
import { Header } from "./Header/Header"
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";




export const App = () => (
  <>
    <Routes>
      <Route  path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route  path="/movies" element={<Movies />} />
      </Route>
    </Routes>
  </>
);


