import React from "react";
import styled from "styled-components";
export function Sun (){
    const SunStyles = styled.div `
    background: rgb(251,255,0);
    background: radial-gradient(circle, rgba(251,255,0,1) 0%, rgba(244,255,19,1) 35%, rgba(255,190,0,1) 100%);
    height:30%;
    position: absolute;
    width: 30%;
    top: 35%;
    opacity: 0.57;
    border-radius: 100%;
    `
    return(
        <>
        <SunStyles style={{

        }} >
        </SunStyles>
        </>
    )
}