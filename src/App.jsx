import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "/Users/nautilus/Desktop/BEAUTIFUL-PORTFOLIO/src/pages/Home.jsx";
import { NotFound } from "/Users/nautilus/Desktop/BEAUTIFUL-PORTFOLIO/src/pages/NotFound.jsx";
import {Toaster} from '@/components/ui/Toaster';

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