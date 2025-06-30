import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Iphone from "./Components/Iphone/Iphone";
import Four04 from "./Components/Four04/Four04";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
// import SingleAppleProduct from "./Components/SingleAppleProduct/SingleAppleProduct";// I guess i didn't finish this part
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="*" element={<Four04 />} />
          {/* <Route path="#" element={<SingleAppleProduct />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
