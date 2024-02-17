import {styled} from 'styled-components'

export const BottomMenuWrap = styled.div`
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 220px;
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
        .planer_list{
            .planer_list_box{
                margin-left: 0px;
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #aaa;
                font-weight: 600;
                img{
                    width: 150px;
                }
                span{
                    padding-top: 10px;
                }
            }
            
        }
    }
`