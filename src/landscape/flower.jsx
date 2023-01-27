import React, { useState } from "react";
import styled from "styled-components";
export function FlowersGarden(){

    //ANIMATION 
    const [FlowersPostion, setFlowersPosition] = useState(0)
    function animation(i){
        if(i == 70){
            setFlowersPosition((i-1))
        }
        else{
            setFlowersPosition((i+1))
            console.log(FlowersPostion)
        }
    }
    setTimeout(function () {animation(FlowersPostion)}, 200);



    const VitoriaRegia = styled.div`
    height: 5vmin;
    background: conic-gradient(var(--v3) 0deg 40deg, var(--transparentv3) 50deg 70deg, var(--v3) 80deg);
    border-radius: 50%;
    position:absolute;
    transform: skew(-10deg);
    opacity: 0.6;
    mix-blend-mode: multiply;
    `
    return(
        <>

        <VitoriaRegia style={{
            left:1+FlowersPostion+"vmin",
            button:"3vmin",
            top:"5%",
            width:"17vmin"
        }} />
        <VitoriaRegia style={{
            right:FlowersPostion+"vmin",
            button:"3vmin",
            width:"15vmin"
        }} />
        <VitoriaRegia style={{
            left:FlowersPostion-10+"vmin",
            button:"1.5vmin",
            top:"29%",
            width:"20vmin"
        }} />
        <VitoriaRegia style={{
            right:FlowersPostion-10+"vmin",
            top:"55%",
            button:"1.5vmin",
            width:"25vmin"
        }} />
        </>
    )
}