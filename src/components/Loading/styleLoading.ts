import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`
export const Loading = styled.div`
    width: 80px;
    height: 80px;
    position: fixed;
    z-index: 2;
    background-color: rgb(0, 0, 0, 0.3);

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        width: 80px;
        height: 80px;
        content: " ";
        border: 6px solid #fff;
        border-radius: 50%;
        border-color:#fff transparent #fff transparent;
        animation: ${rotate} 1.2s linear infinite;
    }
`;
