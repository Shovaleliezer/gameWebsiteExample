import React, { useState, useEffect } from "react";
import { ContainerOne, SendBetButton, ContainerKeys, ContainerInfo,ContainerLogout, Box, InfoButton, LogOutB } from "./style";
import { setStatus } from "../redux/MainReducer";
import { useSelector, useDispatch } from "react-redux";
import { useMoralis } from "react-moralis";
import BurnViewNormal from "./burnViewNormal"
import { FaInfoCircle } from 'react-icons/fa';
import InfoPage from "./InfoPage"

const SwitchCase = (props) => {
    
    const dispatch = useDispatch();
    const { Moralis, isWeb3Enabled, authenticate, isAuthenticated, logout } =
    useMoralis();
    const LogOut = () => {
        if (isAuthenticated || isWeb3Enabled) {
          return (
            <LogOutB color={"red"} color2={"darkred"}   borderColor={"brown"}   
              onClick={async () => {
                await logout();
                window.localStorage.removeItem("connectorId");
              }}
            >
               {String(props.address).substring(0, 4)} .. {String(props.address).substring(38, 42)}
            </LogOutB>
          );
        }
        return <div></div>;
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
      default:
        return (
            <ContainerOne>
                <SendBetButton onClick={() => {dispatch(setStatus("rare"))}}>
                    Rare Page 
                </SendBetButton>
                <SendBetButton onClick={() => {dispatch(setStatus("epic"))}}>
                    Epic Page
                </SendBetButton>
                <SendBetButton onClick={() => {dispatch(setStatus("legendary"))}}>
                    Legendary Page
                </SendBetButton>
                {LogOut()}
            </ContainerOne>
        );
    }
  };

const BurnView = () => {
    const status = useSelector((state) => state.fliper.status); 
    const address = useSelector((state) => state.fliper.address); 
    return (
        <SwitchCase status={status} address={address}/>

    );
};

export default BurnView;