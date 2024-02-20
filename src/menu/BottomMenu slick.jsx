import { BottomMenuWrap } from "../styled/BottomMenuStyles";
import { Canvas } from "@react-three/fiber";
import BottomMenuPlanet from "./BottomMenuPlanet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const bottomMenuList = [
    {id:1, name:"galaxy", map:"./images/galaxy/Asphalt_005_COLOR.jpg", bumpMap:"./images/galaxy/Asphalt_005_ROUGH.jpg", desc:"행성성명작성"},
    {id:2, name:"sun", map:"./images/galaxy/sun/8k_sun.jpg", desc:"행성성명작성"},
    {id:3, name:"mercury", map:"./images/galaxy/mercury/mercurymap.jpg",bumpMap:"./images/galaxy/mercury/mercurybump.jpg", desc:"행성성명작성"},
    {id:4, name:"venus", map:"./images/galaxy/venus/venusmap.jpg",bumpMap:"./images/galaxy/venus/venusbump.jpg", desc:"행성성명작성"},
    {id:5, name:"earth", map:"./images/galaxy/earth/earthmap1k.jpg",bumpMap:"./images/galaxy/earth/earthbump1k.jpg",aoMap:"./images/galaxy/earth/earthspec1k.jpg", desc:"행성성명작성"},
    {id:6, name:"mars", map:"./images/galaxy/mars/mars_1k_color.jpg",bumpMap: "./images/galaxy/mars/mars_1k_topo.jpg", normalMap:"./images/galaxy/mars/mars_1k_normal.jpg", desc:"행성성명작성"},
    {id:7, name:"jupiter", map:"./images/galaxy/jupiter/8k_jupiter.jpg", desc:"행성성명작성"},
    {id:8, name:"sapturn", map:"./images/galaxy/saturn/saturnmap.jpg", ringMap: "./images/galaxy/saturn/saturnringcolor.jpg", ringPatternMap: "./images/galaxy/saturn/saturnringpattern.gif",desc:"행성성명작성"},
    {id:9, name:"uranus", map:"./images/galaxy/uranus/uranusmap.jpg", ringMap:"./images/galaxy/uranus/uranusringcolour.jpg",
    ringTransMap:"./images/galaxy/uranus/uranusringtrans.jpg",desc:"행성성명작성"},
    {id:10, name:"neptune", map:"./images/galaxy/neptune/neptunemap.jpg", desc:"행성성명작성"}
]

const BottomMenu = () => {
    const settings = {
        slidesToShow: 6,
        responsive: [ // 반응형 웹 구현 옵션
            {  
                breakpoint: 1023,
                settings: {
                    slidesToShow:4
                } 
            },
            { 
                breakpoint: 767,
                settings: {	
                    slidesToShow:2
                } 
            }
        ]
      };
    return (
        <BottomMenuWrap>
            <Slider {...settings}>
                {bottomMenuList.map(item=><div key={item.id} className="planer_list">
                        <div className="planer_list_box">
                            <Canvas>
                                <BottomMenuPlanet item={item} style={{ hover: { boxShadow: '0px 0px 22px 10px #FFFFFF' } }}/>
                            </Canvas>
                            <span>{item.name}</span>
                        </div>
                    </div>
                )}
            </Slider>
        </BottomMenuWrap>
    );
};

export default BottomMenu;