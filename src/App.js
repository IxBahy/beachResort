
import "./App.css"
import { Route, Routes } from "react-router-dom";
import { Error } from './page/Error'
import { Home } from "./page/Home";
import { Rooms } from './page/Rooms'
import { SingleRoom } from './page/SingleRoom'
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rooms" element={<Rooms />} />
        <Route exact path="/rooms/:slug" element={<SingleRoom />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
