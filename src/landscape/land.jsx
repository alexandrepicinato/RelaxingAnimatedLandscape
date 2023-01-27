import React from "react";
import styled from "styled-components";
import { Floor } from "./floor";
import { Sun } from "./sun";


export function Lanscape(){
    const LandBackgroundStyle = styled.div `
    background: rgb(251,255,0);
    width:100%;
    height:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle, rgba(251,255,0,1) 0%, rgba(232,193,55,1) 35%, rgba(255,61,0,1) 100%);
    background: radial-gradient(circle, rgba(255,246,0,1) 0%, rgba(246,19,255,1) 47%, rgba(0,7,255,1) 94%);
    background: radial-gradient(circle, rgba(255,246,0,1) 0%, rgba(246,19,255,1) 73%, rgba(0,7,255,1) 94%);
    background: radial-gradient(circle, rgba(0,255,241,1) 0%, rgba(255,19,252,1) 73%, rgba(173,0,255,1) 100%)
    background: radial-gradient(circle, rgba(233,46,255,1) 0%, rgba(134,0,132,1) 71%, rgba(55,0,82,1) 100%);
    background: radial-gradient(circle, rgba(233,46,255,1) 0%, rgba(134,0,132,1) 71%, rgba(55,0,82,1) 100%);
    background-image: linear-gradient(#6b4a70, #fea798, var(--v1));

    ;
`
    const Rocks =styled.div`
    border-radius: 180% 80% 0% 0%/60vmin 60vmin 0% 0%;
    background: var(--s1);
    background-image: linear-gradient(var(--v1), var(--v2) 30%, var(--v3));
    box-shadow: inset -10px 0 10px -10px var(--s1);
    position:absolute
    `
    return(
        <>
            <LandBackgroundStyle >
                <Sun />
                <Rocks style={{
                    width:"40%",
                    height:"36%",
                    opacity:"1",
                    left:"0%",
                    top:"14%"
                }}/>
                <Rocks style={{
                    width:"35%",
                    height:"36%",
                    opacity:"1",
                    right:"0%",
                    top:"14%",
                    transform:"skelX(-1)"
                }}/>
                
                <Floor />
            </LandBackgroundStyle>
        </>
    )

}