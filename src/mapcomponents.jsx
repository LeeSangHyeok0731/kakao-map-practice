import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    // 카카오 맵 API 스크립트 로드 확인
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=f87b60a6e03e13e718d0c26fa7c72556";
    script.async = true;
    script.onload = () => {
      const { kakao } = window;
      if (kakao && kakao.maps) {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.5665, 126.9780), // 지도 중심 좌표
          level: 3, // 지도 확대 레벨
        };

        const map = new kakao.maps.Map(container, options); // 지도 생성

        const markerPosition = new kakao.maps.LatLng(37.5665, 126.9780);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map); // 마커 지도에 추가
      }
    };
    document.head.appendChild(script); // 스크립트를 동적으로 추가
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "400px",
      }}
    ></div>
  );
};

export default MapComponent;
