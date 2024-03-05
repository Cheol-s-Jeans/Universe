import { styled } from 'styled-components'

export const BottomMenuWrap = styled.div`
    position: absolute;
    bottom: -205px;;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 240px;
    box-sizing: border-box;
    padding-top: 20px;
    text-transform: uppercase;
    transition: all 1s ease-in-out;
    &.on{
        transform: translateX(-50%) translateY(-80%) 
    }
    /* background: #fff; */
    .bottom_arrow{
        z-index: 10;
        box-sizing: border-box;
        position: absolute;
        top: -10%;
        right: 50%;
        transform: translateX(50%);
        padding: 0px;
        color: white;
        font-size: 40px;
        transition: all 1s ease-in-out;
        color: #333;

        &.on{
            color: #ffffff;
            transform: translateX(50%) translateY(90%) rotateX(180deg) ;
        }
    }
    .planer_swiper{
        
        .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after{
            transform: translateX(0px);
            color:  #aaa;
        }
        .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after  {
            color:  #aaa;
            transform: translateX(0px);
        }
        .planer_list{
            .planer_list_box{
                margin-left: 0px;
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #aaa;
                font-weight: 600;
                position: relative;
                &:hover{
                    
                }
                .circle{
                    .curved-line {
                        width: 20px;
                        height: 20px;
                    }
                }
        
                img{
                    width: 150px;
                }
                span{
                    padding-top: 15px;
                }
            }
            
        }
    }
`