import {styled} from 'styled-components'


export const TopMenuWrap = styled.div`
    box-sizing: border-box;
    
    position: absolute;
    top:0px;
    right: 10px;
    display: flex;
    img{
        width: 80px;
        height: auto;
        &:last-of-type{
            width: 65px;
            object-fit: contain;
            height: auto;
        } 
        /* 너비 60~70정도로 줄이고 싶은데 안되는 이유가 뭐지 */
        transform: translateX();
    }
    span{
        color: #fff;
        font-size:25px;
        font-weight: 900;
        margin-top: 20px;
    }
    i{
        margin: 10px 10px 0px 10px ;
        box-sizing: border-box;
        width: 20px;
        height: 20px;        
        border-radius: 50%;
        border: 2px solid #ccc;
        padding: 1px 0px 0px 2px;
        font-size: 12px;
        color: #ccc;
        &:hover{
            + .description_box{
                display: block;
            }
        }
    }
    .description_box{
        box-sizing: border-box;
        display: none;
        width: 215px;
        height: auto;
        padding: 10px ;
        background: rgba(128,128,128,0.5);
        position: absolute;
        top: 80px;
        right: 10px;
        color: #fff;
    }

`