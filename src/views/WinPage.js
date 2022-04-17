import React, { useState, useEffect } from "react";
import { ContainerReward, ContainerInfoPage, ContainerKeys, ContainerInfo,CollectButton, BoxInfo, Box, BoxReward } from "./style";
import { setStatus } from "../redux/MainReducer";
import { useSelector, useDispatch } from "react-redux";
import { useMoralis } from "react-moralis";
import {getAmountOfKeys, burnKeys} from "../util/SmartContract"
import { FaWindowClose } from 'react-icons/fa';

const WinPage = (props) => {

    console.log("props are " + props)
    const dispatch = useDispatch();
    return (
  
        <ContainerInfoPage>
            
            <ContainerInfo>
                <ContainerKeys>
                    
                    <BoxInfo >
                        <ContainerReward>
                            {
                             (props.type=="rare")?(
                                 (props.reward=="Money")?                          
                                <BoxReward src={"/images/RareCoinsWin.png"}></BoxReward>:
                                (props.reward=="energy")?
                                <BoxReward src={"/images/RareEnergyWin.png"}></BoxReward>:
                                <div>
                                    <BoxReward src={"/images/RareCoinsWin.png"}></BoxReward>
                                    <BoxReward src={"/images/RareEnergyWin.png"}></BoxReward> 
                                </div>
                                ):
                                (props.type=="epic")?(
                                    (props.reward=="Money")?                          
                                   <BoxReward src={"/images/EpicCoinsWin.png"}></BoxReward>:
                                   (props.reward=="energy")?
                                   <BoxReward src={"/images/EpicEnergyWin.png"}></BoxReward>:
                                   <div>
                                       <BoxReward src={"/images/EpicCoinsWin.png"}></BoxReward>
                                       <BoxReward src={"/images/EpicEnergyWin.png"}></BoxReward> 
                                   </div>
                                   ):
                                   (props.reward=="Money")?                          
                                   <BoxReward src={"/images/LegendaryCoinsWin.png"}></BoxReward>:
                                   (props.reward=="energy")?
                                   <BoxReward src={"/images/LegendaryEnergyWin.png"}></BoxReward>:
                                   <div>
                                       <BoxReward src={"/images/LegendaryCoinsWin.png"}></BoxReward>
                                       <BoxReward src={"/images/LegendaryEnergyWin.png"}></BoxReward> 
                                   </div>






                            }
    
                        </ContainerReward>
                        <Box src={props.type=="rare"?"/images/Gift.png":(props.type=="epic"?"/images/GiftEpic.png":"/images/GiftLegendary.png")}></Box>
                    </BoxInfo>
                    
                </ContainerKeys>
            
            </ContainerInfo>
            <CollectButton color={props.type=="rare"?"#FDBF64": (props.type=="epic"?"#CF67F7":"#EB96FE")} color2={props.type=="rare"?"darkorange": (props.type=="epic"?"#EB96FE":"#73EEFF")}  borderColor={props.type=="rare"?"brown": (props.type=="epic"?"PURPLE":"#25CAEA")} onClick={() =>{dispatch(setStatus("normal"))}}>
                
                Collect
            </CollectButton>
        
    </ContainerInfoPage>   
    );
};

export default WinPage;
