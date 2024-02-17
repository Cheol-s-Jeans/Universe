import { TopMenuWrap } from "../styled/TopMenuStyles";
import { FaQuestion  } from 'react-icons/fa';

const starImagesList = [
    {id:1, name: 'star',imgUrl: './images/star_illust.png',islike:true },
    {id:2, name: 'star_illust',imgUrl: './images/fishBread.gif',islike:false }
]

const TopMenu = () => {
    return (
        <TopMenuWrap>
                {starImagesList.map(item=><img key={item.id} src={item.imgUrl} alt={item.name}/>)}
                {/* 리덕스 */}
                <span>10</span> 
                <i><FaQuestion /></i>
                <div className="description_box"> 별자리의 이미지를 별 혹은 붕어빵의 모양으로 변경하여 관측할 수 있습니다. 숫자의 의미는 내가만든 별자리의 갯수입니다.</div>
        </TopMenuWrap>
    );
};

export default TopMenu;