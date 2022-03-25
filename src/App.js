
import { Routes, Route } from "react-router-dom";


import HomeView from "./views/Home";
import "./App.css";


function App() {

  return (
          <Routes>
            <Route path="/" element={<HomeView />} />
          </Routes>
  );
}

export default App;
