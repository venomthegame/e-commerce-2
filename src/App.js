import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./component/main/main";
import Cart from "./component/cart/cart";
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Main/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
