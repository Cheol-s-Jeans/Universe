import { useState } from "react";
import { TopMenuWrap } from "../styled/TopMenuStyles";
import { FaQuestion  } from 'react-icons/fa';

const starImagesList = [
    {id:1, name: 'star',imgUrl: './images/star_illust.png',on:true },
    {id:2, name: 'star_illust',imgUrl: './images/fishBread.gif',on:false }
]

const TopMenu = () => {
    const [starImagesData,setSatarImagesData] = useState(starImagesList)
    const onShow = (id) =>{
        setSatarImagesData(starImagesData.map(item=>item.id===id?{...item, on:true}:{...item, on:false}))
    }
    return (
        <TopMenuWrap>
                {starImagesData.map(item=><img className={item.on?"on":""} key={item.id} src={item.imgUrl} alt={item.name} onClick={()=>onShow(item.id)}/>)}
                <div className="info">
                    <i><FaQuestion /></i>
                    <div className="description_box"> 별자리의 이미지를 별 혹은 붕어빵의 모양으로 변경하여 관측할 수 있습니다. <br/>숫자의 의미는 내가만든 별자리의 갯수입니다.</div>
                    <span>10</span> 
                </div>
                {/* 리덕스 */}
        </TopMenuWrap>
    );
};

export default TopMenu;