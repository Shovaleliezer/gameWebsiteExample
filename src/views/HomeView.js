import React, { useState, useEffect } from "react";
import { ContainerOne, SendBetButton, ContainerHomePage, BoxIcon } from "./style";
import { setStatus, setAddress } from "../redux/MainReducer";
import { useSelector, useDispatch } from "react-redux";
import { useMoralis } from "react-moralis";


const HomeView = () => {
    const status = useSelector((state) => state.fliper.status); 
    const [isMatic, setIsMatic] = useState(false);
    const userAddress = useSelector((state) => state.fliper.address);
  
    const dispatch = useDispatch();
  
    const { Moralis, isWeb3Enabled, authenticate, isAuthenticated, logout } =
      useMoralis();
  
    useEffect(() => {
      const unsub = Moralis.onWeb3Enabled(async (args) => {
        dispatch(setAddress(args.account));
      });
      return () => {
        unsub();
      };
    }, [Moralis]);
  
  
    const handleClick = async () => {
      if (Moralis.getChainId() === process.env.REACT_APP_CHAINID) {
        dispatch(setStatus("normal"));
      } else {
        console.log("error ",Moralis.getChainId(), process.env.REACT_APP_CHAINID )
      }
    };

    function handleEthereum() {
        const { ethereum } = window;
        if (ethereum && ethereum.isMetaMask) {
          // console.log("Ethereum successfully detected!");
          // Access the decentralized web!
        } else {
          // alert("Play on Metamask browser!");
          window.location.href = "https://metamask.app.link/dapp/maticplay.io";
        }
      }
    return (
    <ContainerHomePage>
        <BoxIcon src={`/images/NFTRoulleteIcon.png`}>
          
        </BoxIcon>
        <SendBetButton color={"darkorange"} color2={"darkorange"}   borderColor={"brown"}      
        onClick={() => {
            !isAuthenticated
              ? authenticate({
                  provider: "metamask",
                  chainId: 80001,
                  onSuccess: (arg) => {
                    handleClick();
                  },
                })
              : handleClick();
          }} >
            CONNECT METAMASK
        </SendBetButton>
        
    </ContainerHomePage>   

    );
};

export default HomeView;
