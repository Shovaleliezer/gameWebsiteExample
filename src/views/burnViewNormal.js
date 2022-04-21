import React, { useState, useEffect } from "react";
import { Spinner, ContainerBurnPage, ContainerKeys, ContainerInfo,ContainerLogout, Box, InfoButton, LogOutB } from "./style";
import { setStatus, setReward } from "../redux/MainReducer";
import { useSelector, useDispatch } from "react-redux";

import {getAmountOfKeys, burnKeys} from "../util/SmartContract"
import { FaWindowClose } from 'react-icons/fa';

const BurnViewNormal = (props) => {

    const [state, setState] = useState("0")
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
        setState("Loading");
        console.log("test ", props.status)
        switch (props.status) {
            case "rare":
                console.log("rare")
                var {message,type, number } = await burnKeys(props.address, "rare");
                break 
            case "epic":
                console.log("episc")
                var {message,type, number } = await burnKeys(props.address, "epic");
                break 
            case "legendary":
                console.log("legendary")
                var {message,type, number } = await burnKeys(props.address, "legendary");
                break 
            case "defult":
                message = "failed";
                break 
            }
        if (message=="failed") {
            alert("try again later")
            changeVal()
        }
        else if (message=="not enough") {
            alert("not enough")
            console.error("not enough")
            changeVal()
        }
        else if (message=="Energy"){
            // show what got
            
            dispatch(setReward({reward:"energy", type:type}))
            dispatch(setStatus("Win"));
            setState(number);
        }
        else if (message=="Money"){
            // show what got
            
            dispatch(setReward({reward:"Money", type:type}))
            dispatch(setStatus("Win"));
            setState(number);
        }
        else if (message=="EnergyAndMoney"){
            // show what got
            
            dispatch(setReward({reward:"MoneyAndEnergy", type:type}));
            dispatch(setStatus("Win"));
            setState(number);
        }
        else{
            alert("try again later")
            changeVal()
        }
        
    }
    
    useEffect(() => {
        try {
            if (state!="Loading"){
                changeVal()
            }
            
      
        }catch (error) {
            console.log(error);
            setState("0");
    }});

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
    return (
  
        <ContainerBurnPage>
            
            <ContainerInfo>
                <ContainerKeys>
                    <FaWindowClose size={80 } style={{color:"red",  marginBottom:"60px" , cursor: "pointer"}} onClick={() => {state=="Loading"?alert("please wait for the gift to open"):dispatch(setStatus("normal"))}} />
                    <Box src={props.status=="rare"?`/images/RareNFT.png`: (props.status=="epic"?`/images/EpicNFT.png`:`/images/LegendaryNFT.png`)}>
                    </Box>
                    <InfoButton color={props.status=="rare"?"#FDBF64": (props.status=="epic"?"#CF67F7":"#EB96FE")} color2={props.status=="rare"?"darkorange": (props.status=="epic"?"#EB96FE":"#73EEFF")}  borderColor={props.status=="rare"?"brown": (props.status=="epic"?"PURPLE":"#25CAEA")}   onClick={() => {callBurn()}}>
                        {state=="Loading"? <Spinner></Spinner>: `${state} / 5`}
                    </InfoButton>
                </ContainerKeys>
            
            </ContainerInfo>
            <ContainerLogout>
                {LogOut()}
            </ContainerLogout>
        
    </ContainerBurnPage>   
    );
};

export default BurnViewNormal;
