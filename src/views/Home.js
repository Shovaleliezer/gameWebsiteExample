import React, { useState, useEffect } from "react";
import { ContainerOne, SendBetButton, ContainerTwo, ContainerThree } from "./style";
import { setStatus } from "../redux/MainReducer";
import { useSelector, useDispatch } from "react-redux";

const SwitchCase = (props) => {
    const dispatch = useDispatch();
    const chooseRandomPage = () => {
        dispatch(setStatus(Math.floor(Math.random() * 3)));
    }
    switch (props.status) {
        case 0:
            return (
                <ContainerOne>
                    <SendBetButton onClick={() => {chooseRandomPage()}}>
                        Random Page
                    </SendBetButton>
                </ContainerOne>
            );
        case 1:
            return (
                <ContainerTwo>
                    <SendBetButton onClick={() => {chooseRandomPage()}} >
                        Random Page
                    </SendBetButton>
                </ContainerTwo>    
            );
        case 2:
            return (
                <ContainerThree>
                    <SendBetButton onClick={() => {chooseRandomPage()}} >
                        Random Page
                    </SendBetButton>
                </ContainerThree>    
            );

      default:
        return (
            <ContainerTwo>
                <SendBetButton onClick={() => {chooseRandomPage()}} >
                    Random Page
                </SendBetButton>
            </ContainerTwo>    
        );
    }
  };

const HomeView = () => {
    const status = useSelector((state) => state.fliper.status); 
    return (
    <SwitchCase status={status}/>

    );
};

export default HomeView;
