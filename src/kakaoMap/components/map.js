
import React , {useEffect} from 'react'
/*global kakao*/
import InfoWindowContent from './InfoWindowContent'

var positions = [
    {
        title: '카카오', 
        latlng: new kakao.maps.LatLng(33.450705, 126.570677),
        selected : false
    },
    {
        title: '생태연못', 
        latlng: new kakao.maps.LatLng(33.450936, 126.569477),
        selected : false
    },
    {
        title: '텃밭', 
        latlng: new kakao.maps.LatLng(33.450879, 126.569940),
        selected : false
        
    },
    {
        title: '근린공원',
        latlng: new kakao.maps.LatLng(33.45, 126.570738),
        selected : false
    }
];

const imageSrc = 'http://k.kakaocdn.net/dn/QPtC7/btqX09yP4mb/TjDMw3wM9gRNT8Zr7b6kkk/img_110x110.jpg'; // 마커이미지의 주소입니다    
   

const makeMarker = (map) =>{
    for (var i = 0; i < positions.length; i ++) {
        
        const imageSize = new kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);//마커 이미지 생성
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage, // 마커 이미지 
            clickable: true // 마커 클릭시 지도 클릭 이벤트 방지
        });

        
        marker.setClickable(true);
        console.log(InfoWindowContent)

        const iwContent = `${InfoWindowContent()}`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
// 인포윈도우를 생성합니다
        var overlay = new kakao.maps.CustomOverlay({
        content: iwContent,
        map: map,
        position: marker.getPosition()       
        });
        
        overlay.setMap(null);
        

// 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, overlay, positions[i].selected));
        function makeOverListener(map, marker, overlay,isSelected) {
         return function(){
            if(!(isSelected)){
                isSelected = true;
                overlay.setMap(null);
            }
            else{
                isSelected = false;
                overlay.setMap(map);
                
            }
         }   
      }
   }
}


function Map() {

 
   
    useEffect(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = { 
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
    
       var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
     
         makeMarker(map);

    }, [])

    return (
        <>
        <div id="map" style={{width:"100%" ,height:"350px"}}></div>
    </>
    )
}

export default Map
