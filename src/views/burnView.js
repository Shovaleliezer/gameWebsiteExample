import React, { useState, useEffect } from "react";
import { ContainerOne, SendBetButton, ContainerKeys, ContainerInfo,ContainerLogout, Box, InfoButton, LogOutB } from "./style";
import { setStatus, setAddress, setChainId } from "../redux/MainReducer";
import { useSelector, useDispatch } from "react-redux";
import { useMoralis } from "react-moralis";
import BurnViewNormal from "./burnViewNormal"
import { FaInfoCircle } from 'react-icons/fa';
import InfoPage from "./InfoPage"
import WinPage from "./WinPage"

const SwitchCase = (props) => {
    const { ethereum } = window;
    ethereum.on("accountsChanged", (accounts) => {
      
        console.log(accounts[0]);
        
        dispatch(setAddress(accounts[0]))
      });
      ethereum.on("chainChanged", async () => {


          const networkId = await ethereum.request({
            method: "net_version",
          });
        window.location.reload();
        dispatch(setChainId(networkId))
      });
    const dispatch = useDispatch();
    const { Moralis, isWeb3Enabled, authenticate, isAuthenticated, logout } =
    useMoralis();
    const LogOut = () => {
   
          return (
            <LogOutB color={"lime"} color2={"seagreen"}   borderColor={"darkgreen"}   
              onClick={async () => {
               
              }}
            >
               {String(props.address).substring(0, 4)} .. {String(props.address).substring(38, 42)}
            </LogOutB>
          );
        
    
      };

    switch (props.status) {
        case "normal":
            return (
                <ContainerOne>
 
                    <ContainerInfo>
                        <ContainerKeys>
                            <FaInfoCircle size={80 } style={{color:"#FDBF64", marginBottom:"60px",cursor: "pointer"}} onClick={() => {dispatch(setStatus("InfoRare"))}}/>
                            <Box src={`/images/RareNFT.png`}>

                            </Box>
                            <InfoButton color={"#FDBF64"} color2={"darkorange"}   borderColor={"brown"}   onClick={() => {dispatch(setStatus("rare"))}}>
                                Rare Page 
                            </InfoButton>
                        </ContainerKeys>
                        <ContainerKeys>
                            <FaInfoCircle size={80 } style={{color:"#EB96FE",  marginBottom:"60px",cursor: "pointer"}} onClick={() => {dispatch(setStatus("InfoEpic"))}}/>
                            <Box src={`/images/EpicNFT.png`}>

                            </Box>
                            <InfoButton color={"#CF67F7"} color2={"#EB96FE"}   borderColor={"PURPLE"}   onClick={() => {dispatch(setStatus("epic"))}}>
                                Epic Page
                            </InfoButton>
                        </ContainerKeys>
                        <ContainerKeys>
                            <FaInfoCircle size={80 } style={{color:"#73EEFF",  marginBottom:"60px",cursor: "pointer"}} onClick={() => {dispatch(setStatus("InfoLegendary"))}}/>
                            <Box src={`/images/LegendaryNFT.png`}>

                            </Box>
                            <InfoButton color={"#EB96FE"} color2={"#73EEFF"}   borderColor={"#25CAEA"}   onClick={() => {dispatch(setStatus("legendary"))}}>
                            Legendary Page
                            </InfoButton>
                        </ContainerKeys>


                    </ContainerInfo>
                    <ContainerLogout>
                     {LogOut()}
                    </ContainerLogout>
                    
                </ContainerOne>
            );
        case "rare":
            return (
                <BurnViewNormal status={props.status} address= {props.address} />
                
            );
           
        case "epic":
            return (
                <BurnViewNormal status={props.status}  address= {props.address}/>  
            );
            
        case "legendary":
            return (
                <BurnViewNormal status={props.status} address= {props.address} />  
            );

        case "InfoRare":
            return (
                <InfoPage status={props.status} address= {props.address} />  
            );
        case "InfoEpic":
            return (
                <InfoPage status={props.status} address= {props.address} />  
            );
        case "InfoLegendary":
            return (
                <InfoPage status={props.status} address= {props.address} />  
            );
        case "Win":
            return (
                <WinPage reward={props.reward} type={props.type}  />  
            );      
      default:
        return (
                <InfoPage status={props.status} address= {props.address} />  
        );
    }
  };

const BurnView = () => {
    const status = useSelector((state) => state.fliper.status); 
    const address = useSelector((state) => state.fliper.address); 
    const type = useSelector((state) => state.fliper.type);
    const reward = useSelector((state) => state.fliper.reward);
    return (
        <SwitchCase status={status} address={address} reward={reward} type={type}/>

    );
};

export default BurnView;
