import {styled} from 'styled-components'

export const BottomMenuWrap = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 240px;
    box-sizing: border-box;
    padding-top: 20px;
    text-transform: uppercase;
    /* background: #fff; */
    .planer_swiper{
        
        .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after{
            transform: translateX(0px);
            color:  #aaa;
        }
        .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after  {
            color:  #aaa;
            transform: translateX(0px);
        }
        /* .homeButton{
            color: #fff;
            position:relative;
            top:50%;
            left:50%;
            transform: translateY(-50%) ;
            font-size: 30px;
        } */
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