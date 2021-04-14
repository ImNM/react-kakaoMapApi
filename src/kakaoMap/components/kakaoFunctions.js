import {datas} from '../Data/MapData'
import InfoWindowContent from './InfoWindowContent'

/*global kakao*/
    //------------------------------------------------ Latlng 는 저장소 들어가면 깨지니 깐 좌표 로 하셈--------------------------------------------------
//var datas = datas

export const makeMarker = (map) =>{
    for (var i = 0; i < datas.length; i ++) {
        console.log(datas[i])
        const imageSize = new kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        const markerImage = new kakao.maps.MarkerImage(datas[i].imageSrc, imageSize, imageOption);//마커 이미지 생성
        // 마커를 생성합니다
      
      
        console.log(datas[i].WGS84X,datas[i].WGS84Y)
        const lng = new kakao.maps.LatLng( datas[i].WGS84X, datas[i].WGS84Y);
        console.log(lng)
        var marker = new kakao.maps.Marker({

            map: map, // 마커를 표시할 지도
            position:lng , // 마커를 표시할 위치
            title : datas[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage, // 마커 이미지 
            clickable: true ,// 마커 클릭시 지도 클릭 이벤트 방지
           
        });
      
        console.log(marker.n,i)
        marker.id = datas[i].id;  //MapInfoListView에서 클릭시 해당 마커 infoWindow Open Event 호출용
        
        marker.setClickable(true);

        const iwContent = `${InfoWindowContent(datas[i])}`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        // 인포윈도우를 생성합니다
        var overlay = new kakao.maps.CustomOverlay({
        content: iwContent,
        map: map,
        position: marker.getPosition()       
        });
        overlay.id =datas[i].id;
        overlay.setMap(null);
      
        
// 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, overlay, datas[i].selected));
        
        function makeOverListener(map, marker, overlay,isSelected) {
            
         return function(){
            if(!(isSelected)){
                console.log("clied")
                isSelected = true;
                overlay.setMap(map);
                  
			    var pos = marker.getPosition();
			    console.log(pos);
			    map.panTo(pos);
                
            }
            else{
              
                isSelected = false;
                overlay.setMap(null);
                
            }
         }   
      }

    //  console.log(marker)
   }
}

export const setMakerOption = (map) =>{
    var options = { // Drawing Manager를 생성할 때 사용할 옵션입니다
        map: map, // Drawing Manager로 그리기 요소를 그릴 map 객체입니다
        drawingMode: [ // drawing manager로 제공할 그리기 요소 모드입니다
            kakao.maps.drawing.OverlayType.MARKER
        ],
        // 사용자에게 제공할 그리기 가이드 툴팁입니다
        // 사용자에게 도형을 그릴때, 드래그할때, 수정할때 가이드 툴팁을 표시하도록 설정합니다
        markerOptions: { // 마커 옵션입니다 
            draggable: true, // 마커를 그리고 나서 드래그 가능하게 합니다 
            removable: true // 마커를 삭제 할 수 있도록 x 버튼이 표시됩니다  
        },
    };
    
    var manager = new kakao.maps.drawing.DrawingManager(options);

    return manager;

}

//버튼 클릭 시 호출되는 핸들러 입니다
export function selectOverlay(type,manager) {
    // 그리기 중이면 그리기를 취소합니다
    manager.cancel();

    // 클릭한 그리기 요소 타입을 선택합니다
    manager.select(kakao.maps.drawing.OverlayType[type]);
}

export function getDataFromDrawingMap(manager) {
    // Drawing Manager에서 그려진 데이터 정보를 가져옵니다 
    var data = manager.getData();
    console.log(data);
    if(data.marker.length === 0){
        console.log("return")
        return {x:0,y:0};
    }
    // 아래 지도에 그려진 도형이 있다면 모두 지웁니다
    //console.log(data.marker[0].x);
    const wgs84 = {
        x:data.marker[0].x,
        y:data.marker[0].y
    }
   return wgs84;
    // 지도에 가져온 데이터로 도형들을 그립니다
    //drawMarker(data[kakao.maps.drawing.OverlayType.MARKER]);
    
}



// export function panTo(map,WTMX,WTMY) { //부드럽게 이동시켜 부려~
//     var WGS84X,WGS84Y;

// var geocoder = new kakao.maps.services.Geocoder(), // 좌표계 변환 객체를 생성합니다
// wtmX = WTMX, // 변환할 WTM X 좌표 입니다
// wtmY = WTMY; // 변환할 WTM Y 좌표 입니다

// // WTM 좌표를 WGS84 좌표계의 좌표로 변환합니다
// geocoder.transCoord(wtmX, wtmY, transCoordCB, {
// input_coord: kakao.maps.services.Coords.WTM, // 변환을 위해 입력한 좌표계 입니다
// output_coord: kakao.maps.services.Coords.WGS84 // 변환 결과로 받을 좌표계 입니다 
// });

// // 좌표 변환 결과를 받아서 처리할 콜백함수 입니다.
// function transCoordCB(result, status) {

// // 정상적으로 검색이 완료됐으면 
// if (status === kakao.maps.services.Status.OK) {
//     console.log(WGS84X,WGS84Y)

//     // 마커를 변환된 위치에 표시합니다
//     WGS84X = result[0].y; 
//     WGS84Y = result[0].x; // 마커를 표시할 위치입니다
//     var moveLatLon = new kakao.maps.LatLng(WGS84X, WGS84Y);
    
//     // 지도 중심을 부드럽게 이동시킵니다
//     // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
//     map.panTo(moveLatLon);    
     
// }
// }
//     // 이동할 위도 경도 위치를 생성합니다 
            
// }        