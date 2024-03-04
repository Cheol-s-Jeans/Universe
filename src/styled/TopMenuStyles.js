import {styled} from 'styled-components'


export const TopMenuWrap = styled.div`
    box-sizing: border-box;
    .homeButton{
        color: #fff;
        position:absolute;
        top:20px;
        left: 20px;
        font-size: 20px;
    }
    .rightTop{
        position: absolute;
        top:20px;
        right: 10px;
        display: flex;
        img{
            cursor: pointer;
            width: 55px;
            height: 55px;
            &:last-of-type{
                width: 60px;
                object-fit: contain;
                height: auto;
                margin: 0px 10px;
            } 
            &.on{
                opacity: 0.3;
            }
        }
        .info{
            display: flex;
            flex-direction: column;
            align-items: center;
            span{
                color: #ddd;
                font-size:24px;
                font-weight: 900;
            }
            i{
                margin-bottom: 2px;
                box-sizing: border-box;
                width: 16px;
                height: 16px;        
                border-radius: 50%;
                border: 1px solid #aaa;
                padding: 1px 0px 0px 2px;
                font-size: 10px;
                color: #aaa;
                opacity: 0.7;
                &:hover{
                    + .description_box{
                        display: block;
                    }
                }
            }
        }
        .description_box{
            display: none;
            box-sizing: border-box;
            width: 250px;
            height: auto;
            padding: 10px ;
            background: rgba(128,128,128,0.5);
            position: absolute;
            top: 65px;
            right: 0px;
            color: #fff;
        }
    }

`