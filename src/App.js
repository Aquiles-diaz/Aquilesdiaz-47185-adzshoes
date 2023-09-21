import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemsListContainer";
import Error404 from "../src/Components/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
