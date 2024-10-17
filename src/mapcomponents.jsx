import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    // 카카오 맵 API 스크립트가 로드되었는지 확인
    const { kakao } = window;
    if (kakao && kakao.maps) {
      const container = document.getElementById("map"); // 지도를 표시할 div
      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 초기 지도 중심 좌표 (예: 서울 시청)
        level: 3, // 지도의 확대 레벨
      };
      
      // 지도 생성
      const map = new kakao.maps.Map(container, options);

      // 지도에 마커 추가
      const markerPosition = new kakao.maps.LatLng(37.5665, 126.9780);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map); // 마커를 지도에 표시
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "400px", // 지도의 높이 설정
      }}
    ></div>
  );
};

export default MapComponent;
