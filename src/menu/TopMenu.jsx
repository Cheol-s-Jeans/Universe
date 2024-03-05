import { useState } from "react";
import { TopMenuWrap } from "../styled/TopMenuStyles";
import { FaQuestion  } from 'react-icons/fa';
import { AiOutlineHome } from "react-icons/ai";

const starImagesList = [
    {id:1, name: 'star',imgUrl: './images/star_illust.png',on:true },
    {id:2, name: 'star_illust',imgUrl: './images/fishBread.gif',on:false }
]

const TopMenu = ({setCameraPosition,setCameraTarget}) => {
    const [starImagesData,setSatarImagesData] = useState(starImagesList)
    const onShow = (id) =>{
        setSatarImagesData(starImagesData.map(item=>item.id===id?{...item, on:true}:{...item, on:false}))
    }
    const onHomeBtnClick=()=>{
        setCameraPosition({ x:330, y: 0, z:350})
        setCameraTarget({x: 330, y: 0, z: 0})
    }
    return (
        <TopMenuWrap>
                <div className="homeButton" onClick={onHomeBtnClick}><i><AiOutlineHome /></i></div>
                {/* <div className="rightTop">
                    {starImagesData.map(item=><img className={item.on?"on":""} key={item.id} src={item.imgUrl} alt={item.name} onClick={()=>onShow(item.id)}/>)}
                    <div className="info">
                        <i><FaQuestion /></i>
                        <div className="description_box"> 별자리의 이미지를 별 혹은 붕어빵의 모양으로 변경하여 관측할 수 있습니다. <br/>숫자의 의미는 내가만든 별자리의 갯수입니다.</div>
                        <span>10</span> 
                    </div>
                </div> */}
        </TopMenuWrap>
    );
};

export default TopMenu;