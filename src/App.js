
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import FriendDetails from './Component/FriendDetails/FriendDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/home" element={<Home />} />;
        <Route path="/friend/:friendId" element={<FriendDetails/>} />;
        <Route path="*" element={<PageNotFound/>} />;
      </Routes>
    </BrowserRouter>
  )

}

export default App;
