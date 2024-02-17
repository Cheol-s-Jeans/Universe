import {keyframes, styled} from 'styled-components'

const rightArrowAni = keyframes`
    0%{transform:translateX(0px)}
    50%{transform:translateX(100px)}
    100%{transform:translateX(0px)}
`

export const StarWrap = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    right: 20px;
    background: white;
    width: 100px;
    height: 100px;
    span{
        /* transform: translateX(0px); */
        /* transition: all 1s ease 0s;  */
        /* color: white; */
        font-size: 40px;
        animation: ${rightArrowAni} 1s infinite ease-in-out;
    }

`