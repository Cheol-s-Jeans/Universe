import { BottomMenuWrap } from "../styled/BottomMenuStyles";
import { Swiper, SwiperSlide } from "swiper/react" // basic
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Canvas } from "@react-three/fiber";
import BottomMenuPlanet from "./BottomMenuPlanet";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

const bottomMenuList = [
    // {id:1, name:"galaxy",position:[0,0,0], map:"./images/galaxy/Asphalt_005_COLOR.jpg", bumpMap:"./images/galaxy/Asphalt_005_ROUGH.jpg", desc:"행성성명작성"},
    {id:2, name:"sun",position:[-100,50,300], map:"./images/galaxy/sun/8k_sun.jpg", desc:"행성성명작성"},
    {id:3, name:"mercury",position:[170,0,0], map:"./images/galaxy/mercury/mercurymap.jpg",bumpMap:"./images/galaxy/mercury/mercurybump.jpg", desc:"행성성명작성"},
    {id:4, name:"venus",position:[230,0,0], map:"./images/galaxy/venus/venusmap.jpg",bumpMap:"./images/galaxy/venus/venusbump.jpg", desc:"행성성명작성"},
    {id:5, name:"earth",position:[290,0,0], map:"./images/galaxy/earth/earthmap1k.jpg",bumpMap:"./images/galaxy/earth/earthbump1k.jpg",aoMap:"./images/galaxy/earth/earthspec1k.jpg", desc:"행성성명작성"},
    {id:6, name:"mars",position:[350,0,0], map:"./images/galaxy/mars/mars_1k_color.jpg",bumpMap: "./images/galaxy/mars/mars_1k_topo.jpg", normalMap:"./images/galaxy/mars/mars_1k_normal.jpg", desc:"행성성명작성"},
    {id:7, name:"jupiter",position:[410,0,0], map:"./images/galaxy/jupiter/8k_jupiter.jpg", desc:"행성성명작성"},
    {id:8, name:"sapturn",position:[470,0,0], map:"./images/galaxy/saturn/saturnmap.jpg", ringMap: "./images/galaxy/saturn/saturnringcolor.jpg", ringPatternMap: "./images/galaxy/saturn/saturnringpattern.gif",desc:"행성성명작성"},
    {id:9, name:"uranus",position:[530,0,0], map:"./images/galaxy/uranus/uranusmap.jpg", ringMap:"./images/galaxy/uranus/uranusringcolour.jpg",
    ringTransMap:"./images/galaxy/uranus/uranusringtrans.jpg",desc:"행성성명작성"},
    {id:10, name:"neptune",position:[590,0,0], map:"./images/galaxy/neptune/neptunemap.jpg", desc:"행성성명작성"}
]

const BottomMenu = ({CameraMove}) => {
    const [isHoverId, setIsHoverId] = useState(false);

    //hover
    const mouseOver = (id) => {
        setIsHoverId(id);
    }
    const mouseOut = () =>{
        setIsHoverId(false);
    }

    return ( 
        <BottomMenuWrap>
            <Swiper
                style={{
                    width:"100%",
                    height:"100%",
                }}
                slidesPerView={6}
                slidesPerGroup={1}
                spaceBetween={0}
                navigation={true}
                modules={[ Navigation]}
                className="planer_swiper"
                //반응형 작동안함
                // breakpoints={
                //     {1280:{
                //             slidesPreView:4,
                //             slidesPerGroup:1,
                //     }, 720:{
                //                 slidesPreView:2,
                //                 slidesPerGroup:1,	
                //     }}
                // }
            >

                {bottomMenuList.map(item=><SwiperSlide key={item.id} className="planer_list">
                        <div className="planer_list_box" onMouseOver={()=>mouseOver(item.id)} onMouseOut={mouseOut}>
                            <Canvas>
                                <BottomMenuPlanet CameraMove={CameraMove} item={item} isHoverId={isHoverId} />
                            </Canvas>
                            <span>{item.name}</span>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </BottomMenuWrap>
    );
};

export default BottomMenu;