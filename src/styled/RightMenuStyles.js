import {keyframes, styled} from 'styled-components'

const rightArrowAni = keyframes`
    0%{transform:translateX(0px) translateY(-50%) }
    50%{transform:translateX(-10px) translateY(-50%)}
    100%{transform:translateX(0px) translateY(-50%)}
`
const rightArrowAniOn = keyframes`
    0%{transform:translateX(-10px) translateY(-50%) rotateY(0deg)}
    100%{transform:translateX(-330px) translateY(-50%) rotateY(180deg)}
`
const rightArrowAniOff = keyframes`
    0%{transform:translateX(-330px) translateY(-50%) rotateY(180deg)}
    100%{transform:translateX(0px) translateY(-50%) rotateY(360deg)}
`

export const StarWrap = styled.div`
    .right_arrow{
        z-index: 10;
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
        padding: 0px;
        color: white;
        font-size: 40px;
        transition: all 1s ease-in-out;
        /* animation: ${rightArrowAni} 1s infinite ease-in-out; */
        /* animation: ${rightArrowAniOff} 1s forwards ease-in-out; */
        &.on{
            /* animation: ${rightArrowAniOn} 1s forwards ease-in-out; */
            transform: translateX(-390px)translateY(-50%) rotateY(180deg) ;
        }
    }
    .right_info_box{
        position: absolute;
        top: 0px;
        right: 0px;
        width: 400px;
        height: 100vh;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index:1;
        transition: all 1s ease-in-out;
        transform: translateX(400px) ;
        &.on{
            transform: translateX(0px) ;
            
        }
        .info_message{
            box-sizing: border-box;
            color: white;
            width: 350px;
            padding:20px 10px;
            text-align: center;
            margin-top: 80px;
            p{
                line-height: 25px;
                /* font-size: 14px; */
                margin: 0px 0px 10px ;
            }
            span{
                font-size: 12px;
                color:#B5B772;
            }
        }
        .possession{
            margin-top: 20px;
            display: flex;
            align-items: center;
            span{
                color: white;
                font-size: 18px;
                font-weight: 700;
                padding: 10px;
            }
            img{
                width: 80px;
            }
            b{
                color: yellow;
                font-size: 35px;
            }
        }
        .btn_box{
            margin-top: 50px;
                span{
                    display: inline-block;
                    color:white;
                    font-size: 25px;
                    font-weight: 700;
                    margin-right: 20px;
                }
                .btn_3d {
                    transform:translateY(-5px);
                    font-size: 22px;
                    padding: 8px 12px ;
                    color: white;
                    font-weight: 700;
                    border-radius: 50%;
                    text-align: center;
                    transition: all .01s linear;
                    text-shadow: 0 1px 0 rgba(0,0,0,0.5);
                    cursor: pointer;
                    background-color: #e74c3c;
                    box-shadow: 0 0 0 1px #c63702 inset,
                            0 0 0 2px rgba(255,255,255,0.15) inset,
                            0 6px 0 0 #C24032,
                            0 6px 0 1px rgba(0,0,0,0.4),
                            0 6px 6px 1px rgba(0,0,0,0.5);
                    &:active{
                        transform: translateY(1px);
                        box-shadow: 0 0 0 1px #c63702 inset,
                            0 0 0 2px rgba(255,255,255,0.15) inset,
                            0 0 0 1px rgba(0,0,0,0.4);
                    }
                }
            }
        .fishbread_baking{
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            margin-top:40px ;
            .bread_box{
                position:relative;
                img{
                    width: 100px;
                    margin-top: 30px;
                    margin-left: 20px;
                }
                span{
                    position: absolute;
                    top: 0px;
                    left: 35%;
                    display: inline-block;
                    font-size: 40px;
                    font-weight: 900;
                    transform: rotate(90deg);
                    color: white;
                    opacity: 0;
                    &:last-of-type{
                        left: 55%;
                        top: -10px;
                    }
                }

            }
            .smoke{
                .smoke_1{
                    /* display: flex; */
                    /* flex-direction: column; */
                    
                }
            }
        }
    }


`