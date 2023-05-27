// import { Searchbar } from "./Search/Search"; 

import { Header } from "./Header/Header"
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { Routes, Route } from "react-router-dom"



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


/* <Header /> 
<Routes>
  <Route index element={<Home />} />
  <Route exact path="/" element={<Home />}>
  </Route>
  <Route exact path="/movies" element={<Movies />} />
</Routes> */