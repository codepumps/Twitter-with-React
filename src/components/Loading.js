import React from 'react'
import styled from "styled-components";

const Loading = () => {
    return (
        <LoadingIcon />
    )
}

export default Loading

const LoadingIcon = styled.div`
    display: inline-block;
    border: 3px solid var(--twitter-more-dark-hover);
    border-left-color: var(--twitter);
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: donut-spin 1.2s linear infinite;

    @keyframes donut-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`
