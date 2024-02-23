import { BufferGeometry, LineDashedMaterial } from "three";

const HoverCircle = ({ radius, segments, dashSize, gapSize }) => {
    // BufferGeometry를 사용하여 원 모양의 점들을 정의
    const geometry = new BufferGeometry().setFromPoints(
        Array.from({ length: segments + 1 }, (_, index) => {
          const theta = (index / segments) * Math.PI * 2;
          const x = radius * Math.cos(theta);
          const y = radius * Math.sin(theta);
          return { x, y, z: 0 };
        })
    );

    // LineDashedMaterial을 사용하여 선의 스타일 설정
    const material = new LineDashedMaterial({
        color: 0x000000, // 선의 색상
        linewidth: 2, // 선의 두께
        scale: 1, // 선의 스케일
        dashSize, // 점선의 크기
        gapSize, // 점선 간격의 크기
    });

    return (
        <line geometry={geometry} material={material} />
    );
};

export default HoverCircle;
