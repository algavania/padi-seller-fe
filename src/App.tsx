import LoginIntroPage from "./features/auth/LoginIntroPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellerLoginPage from "./features/auth/SellerLoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginIntroPage />}></Route>
          <Route path="/seller-login" element={<SellerLoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
