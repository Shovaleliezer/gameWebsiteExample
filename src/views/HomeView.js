import React, { useState, useEffect } from "react";
import { ContainerOne, SendBetButton, ContainerHomePage, BoxIcon } from "./style";
import { setStatus, setAddress, setChainId } from "../redux/MainReducer";
import { useSelector, useDispatch } from "react-redux";
const HomeView = () => {
  const dispatch = useDispatch();
  const connect = async () => {
    
      console.log("t", window);
      const { ethereum } = window;
      console.log("t", ethereum);
      const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
      if (metamaskIsInstalled) {
    
        
        try {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log(accounts, " t");
          const networkId = await ethereum.request({
            method: "net_version",
          });
          console.log(accounts, " t");
          if (networkId == "137") { 
            dispatch(setAddress(accounts[0]))
            dispatch(setChainId(networkId))
            console.log(accounts[0], networkId)
            // Add listeners start
            ethereum.on("accountsChanged", (accounts) => {
              console.log(accounts[0]);
              dispatch(setAddress(accounts[0]))
            });
            ethereum.on("chainChanged", () => {
              window.location.reload();
              dispatch(setChainId(networkId))
            });
            // Add listeners end
          } else {
            console.log(`Change network to matic.`);
          }
        } catch (err) {
          console.log("Something went wrong.");
        }
      } else {
        console.log("Install Metamask.");
      }
    
  };
  


    return (
    <ContainerHomePage>
        <BoxIcon src={`/images/NFTRoulleteIcon.png`}>
          
        </BoxIcon>
        <SendBetButton color={"darkorange"} color2={"darkorange"}   borderColor={"brown"}      
        onClick={() => {
          console.log('test1');
          connect();
          }} >
            CONNECT METAMASK
        </SendBetButton>
        
    </ContainerHomePage>   

    );
};

export default HomeView;
