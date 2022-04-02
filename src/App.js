
import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import BurnView from "./views/burnView";
import "./App.css";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {

  const {dispatch} = useDispatch();
  const {
    Moralis,
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
    chainId,
  } = useMoralis();


  useEffect(() => {
    try {
      Moralis.onAccountChanged(async (args) => {
        //dispatch(setAddress(args));
      });
    } catch (error) {
      console.log(error);
    }

    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  var correctChain;
  if (chainId == process.env.REACT_APP_CHAINID) {
    correctChain = true;
  } else {
    correctChain = false;
    console.log("value is ",  process.env.REACT_APP_CHAINID)
  }

  return (
    <Routes>
      {isAuthenticated && correctChain ? (<Route path="/" element={<BurnView />} /> ) : ( <Route path="/" element={<HomeView />} />)}
    </Routes>
  );
}

export default App;
