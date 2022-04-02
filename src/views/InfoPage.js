import React, { useState, useEffect } from "react";
import { ContainerOne, SendBetButton, ContainerKeys, ContainerInfo,ContainerLogout, BoxInfo, Par, Headline } from "./style";
import { setStatus } from "../redux/MainReducer";
import { useSelector, useDispatch } from "react-redux";
import { useMoralis } from "react-moralis";
import {getAmountOfKeys, burnKeys} from "../util/SmartContract"
import { FaWindowClose } from 'react-icons/fa';

const InfoPage = (props) => {


    const dispatch = useDispatch();
    console.log("test test ", props.status)

    return (
  
        <ContainerOne>
            
            <ContainerInfo>
                <ContainerKeys>
                    
                    <BoxInfo >
                        <Headline>
                            {props.status=="InfoRare"?"Rare Probabilities":(props.status=="InfoEpic"?"Epic Probabilities":"Legendary Probabilities")}
                        </Headline>
                        <Par>
                        {props.status=="InfoRare"?"70 Percent chance for 30 Energy":(props.status=="InfoEpic"?"70 Percent chance for 150 Energy":"70 Percent chance for 400 Energy")}
                        </Par>
                        <Par>
                        {props.status=="InfoRare"?"20 Percent chance for 500,000 Coins":(props.status=="InfoEpic"?"20 Percent chance for 2,000,000 Coins":"70 Percent chance for 5,000,000 Energy")}
                        </Par>
                        <Par>
                        {props.status=="InfoRare"?"8.9 Percent chance for 600,000 Coins and 40 energy":(props.status=="InfoEpic"?"8.9 Percent chance for 2,600,000 Coins and 170 energy":"8.9 Percent chance for 6,000,000 Coins and 500 energy")}
                        </Par>
                        <Par>
                        {props.status=="InfoRare"?"1 Percent chance for 0.1 ETH drop!":(props.status=="InfoEpic"?"1 Percent chance for 0.5 ETH drop!":"1 Percent chance for 5 ETH drop!")}
                        </Par>
                        <Par>
                        {props.status=="InfoRare"?"0.1 Percent chance for NFT Worth over 1 eth!":(props.status=="InfoEpic"?"0.1 Percent chance for NFT Worth over 10 eth like azuki!":"0.1 Percent chance for Bored Ape and CryptoPunk")}
                        </Par>
                    </BoxInfo>
                    
                </ContainerKeys>
            
            </ContainerInfo>
            <ContainerLogout>
                <FaWindowClose size={80 } style={{color:"red",  marginBottom:"60px" , cursor: "pointer"}} onClick={() => {dispatch(setStatus("normal"))}} />
            </ContainerLogout>
        
    </ContainerOne>   
    );
};

export default InfoPage;
