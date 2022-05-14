import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Explore from "./pages/Marketplace/Explore";
import Stats from "./pages/Stats";
import Mint from "./pages/Create/mint";
import Profile from "./pages/Profile/profile";
import NoPage from './pages/NoPage/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="stats" element={<Stats />} />
          <Route path="mint" element={<Mint />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
