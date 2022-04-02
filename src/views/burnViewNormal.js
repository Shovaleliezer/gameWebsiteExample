import React, { useState, useEffect } from "react";
import { ContainerOne, SendBetButton, ContainerKeys, ContainerInfo,ContainerLogout, Box, InfoButton, LogOutB } from "./style";
import { setStatus } from "../redux/MainReducer";
import { useSelector, useDispatch } from "react-redux";
import { useMoralis } from "react-moralis";
import {getAmountOfKeys, burnKeys} from "../util/SmartContract"
import { FaWindowClose } from 'react-icons/fa';

const BurnViewNormal = (props) => {

    const [state, setState] = useState("test")
    const dispatch = useDispatch();
    const changeVal = async () => {
        var val;
        switch (props.status) {
            case "rare":
                console.log("here")
                val = await getAmountOfKeys(props.address, "rare")
                break 
            case "epic":
                val = await getAmountOfKeys(props.address, "epic")
                break 
            case "legendary":
    
                val = await getAmountOfKeys(props.address, "legendary")
                break 
            case "defult":
                val = 0;
                break 
            }
        setState(val);
    }

    const callBurn = async () => {
        console.log("test ", props.status)
        switch (props.status) {
            case "rare":
                console.log("rare")
                var {message, number } = await burnKeys(props.address, "rare");
                break 
            case "epic":
                console.log("episc")
                var {message, number } = await burnKeys(props.address, "epic");
                break 
            case "legendary":
                console.log("legendary")
                var {message, number } = await burnKeys(props.address, "legendary");
                break 
            case "defult":
                message = "failed";
                break 
            }
        if (message=="failed") {
            alert("try again later")
        }
        else if (message=="not enough") {
            alert("not enough")
            console.error("not enough")
        }
        else if (message=="Energy"){
            // show what got
            alert("Energy")
            setState(number);
        }
        else if (message=="Money"){
            // show what got
            alert("Money")
            setState(number);
        }
        else if (message=="EnergyAndMoney"){
            // show what got
            alert("Energy And Money")
            setState(number);
        }
        else{
            alert("try again later")
        }
        
    }
    
    useEffect(() => {
        try {
            changeVal()
      
        }catch (error) {
            console.log(error);
            setState("0");
    }});
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
    return (
  
        <ContainerOne>
            
            <ContainerInfo>
                <ContainerKeys>
                    <FaWindowClose size={80 } style={{color:"black",  marginBottom:"60px" , cursor: "pointer"}} onClick={() => {dispatch(setStatus("normal"))}} />
                    <Box src={props.status=="rare"?`/images/RareNFT.png`: (props.status=="epic"?`/images/EpicNFT.png`:`/images/LegendaryNFT.png`)}>
                    </Box>
                    <InfoButton color={props.status=="rare"?"#FDBF64": (props.status=="epic"?"#CF67F7":"#EB96FE")} color2={props.status=="rare"?"darkorange": (props.status=="epic"?"#EB96FE":"#73EEFF")}  borderColor={props.status=="rare"?"brown": (props.status=="epic"?"PURPLE":"#25CAEA")}   onClick={() => {callBurn()}}>
                        {state} / 5
                    </InfoButton>
                </ContainerKeys>
            
            </ContainerInfo>
            <ContainerLogout>
                {LogOut()}
            </ContainerLogout>
        
    </ContainerOne>   
    );
};

export default BurnViewNormal;
