import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/pages/Home";
import AdminPainel from "./components/pages/AdminPainel";

import './styles/style.css'
import './styles/AdminPainel.css'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:userid/painel" element={<AdminPainel />} />
      <Route path="/user/:userid/form" element={<Form />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
