import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "/src/pages/Home.jsx";
import { NotFound } from "/src/pages/NotFound.jsx";
import {Toaster} from "/src/components/ui/toaster.jsx";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;