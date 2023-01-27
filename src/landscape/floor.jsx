import React from "react";
import styled from "styled-components";
import { FlowersGarden } from "./flower";
export function Floor (){
    const WaterOcean = styled.div `
    width:100%;
    height:50%;
    position:absolute;
    top:50%;
    background: linear-gradient(#fea79855, #8a65cc);
    overflow: hidden;
    box-shadow: inset 0 1px 4px -3px white;`
    const Rocks =styled.div`
    border-radius: 180% 80% 0% 0%/60vmin 60vmin 0% 0%;
    background: var(--s1);
    background-image: linear-gradient(var(--v1), var(--v2) 30%, var(--v3));
    box-shadow: inset -10px 0 10px -10px var(--s1);
    `
    return(
        <>
        <WaterOcean >
            <FlowersGarden />

        </WaterOcean>
        </>
    )
} 