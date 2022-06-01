import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Confirmation from "./pages/Confirmation";
import Payment from "./pages/Payment";
import ShoppingCart from "./pages/ShoppingCart";


export default function AppRoute() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route index element={<ShoppingCart />} />
          <Route path='pagamento' element={<Payment />} />
          <Route path='confirmacao' element={<Confirmation />} />
        </Routes>
      </Router>
    </div>
  )
}