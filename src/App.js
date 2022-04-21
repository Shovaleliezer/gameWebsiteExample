
import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import BurnView from "./views/burnView";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const chainId = useSelector((state) => state.fliper.chainId); 
  const address = useSelector((state) => state.fliper.address); 
  console.log(chainId, "ss");
  var correctChain;
  if (chainId == process.env.REACT_APP_CHAINID) {
    correctChain = true;
  } else {
    correctChain = false;
    console.log("value is ",  process.env.REACT_APP_CHAINID)
  }

  return (
    <Routes>
      {correctChain&&address ? (<Route path="/" element={<BurnView />} /> ) : ( <Route path="/" element={<HomeView />} />)}
    </Routes>
  );
}

export default App;
