import { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { StarWrap } from "../styled/RightMenuStyles";
import BreadBaking from "./BreadBaking";

const RightMenu = () => {
    //사이드 메뉴버튼
    const [sideMenuOn, setSideMenuOn] = useState(false)
    const onSideMenu = () =>{
        setSideMenuOn(!sideMenuOn)
    }
    //굽기버튼
    const [bakingButton, setBakingButton] = useState(false)
    const onBakingClick = ()=>{
        setBakingButton(true);
        setTimeout(() => {
            setBakingButton(false)
        }, 1000);
    }
    return (
        <StarWrap>
            <div className={`right_arrow ${sideMenuOn?"on":""}`} onClick={()=>onSideMenu()}><MdKeyboardDoubleArrowLeft /></div>
                <div className={`right_info_box ${sideMenuOn?"on":""}`}>
                    <div  className="info_message">
                        <p>나만의 별자리를 만들고 싶나요?! <br/> 자신이 갖고 있는 붕어빵을 가지고 <br/> 별자리를 만들어보세요!</p>
                        <span>보유한 붕어빵을 드래그하여 별자리를 만드세요.<br/>붕어빵이 부족하다면 붕어빵을 더 구워보세요!</span>
                    </div>
                    <div className="possession">
                        <span>보유한 붕어빵</span>
                        <img src="./images/fishBread.gif" alt="" />
                        <span>X</span>
                        {/* 리덕스 */}
                        <b>23</b>
                    </div>
                    <div className="btn_box">
                        <span>붕어빵 굽기</span>
                        <button className="btn_3d" onClick={onBakingClick}>On</button>
                    </div>
                    <div className="fishbread_baking">
                        <BreadBaking bakingButton={bakingButton}/>
                        <BreadBaking bakingButton={bakingButton}/>
                        <BreadBaking bakingButton={bakingButton}/>
                        <BreadBaking bakingButton={bakingButton}/>
                        <BreadBaking bakingButton={bakingButton}/>
                        <BreadBaking bakingButton={bakingButton}/>
                    </div>
                </div>

        </StarWrap>
    );
};

export default RightMenu;