import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainHero from "./components/MainHero/MainHero";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import ComingSoon from "./components/Responses/Comingsoon";
import NotFoundPage from "./components/Responses/NotFoundPage";
import Cart from "./components/CartWidget/Cart";
import CartProvider from "./context/CartProvider";
import Checkout from './components/CartWidget/Checkout'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainHero />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/category/star_wars" element={<ComingSoon />} />
            <Route
              path="/item/:category/:id"
              element={<ItemDetailContainer />}
            ></Route>
            <Route path="/ofertas" element={<ComingSoon />} />
            <Route path="/contacto" element={<ComingSoon />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout" element={<Checkout />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
