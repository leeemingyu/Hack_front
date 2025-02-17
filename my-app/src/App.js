import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Recruit from "./components/pages/Recruit";
import Housing from "./components/pages/Housing";
import Logout from "./components/pages/Logout";
import Regi from "./components/pages/Regi";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/regi" element={<Regi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
