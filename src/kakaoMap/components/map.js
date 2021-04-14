
import React , {useEffect,useState} from 'react'
/*global kakao*/

import {makeMarker,setMakerOption,selectOverlay,getDataFromDrawingMap} from './kakaoFunctions'
import MapInfoListView from './MapInfoListView'



function Map() {
    const [markers, setmarkers] = useState([])
    const [manager, setmanager] = useState([])
    const [setMarkerInfo, setsetMarkerInfo] = useState({x:0,y:0})
    
   
    useEffect(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = { 
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
    
       var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
     
         makeMarker(map);
        
         setmanager(setMakerOption(map))
        console.log(manager)
         setmarkers(map.sa)  //mapInfoListView props 데이타 전달 목적
         console.log(map)
    }, [])


    const onClickSetMarker = ()=>{
        console.log(manager)
        selectOverlay("MARKER",manager)
    }

    const onClickSaveMarker = ()=>{
       console.log(getDataFromDrawingMap(manager))
       setsetMarkerInfo(getDataFromDrawingMap(manager));
    }

    return (
        <>
        <div id="map" style={{marginTop:"100px" , width:"70%" ,height:"500px"}}></div>
        <button onClick ={onClickSetMarker} >마커 표시하기</button>
        <button onClick ={onClickSaveMarker} >마커 좌표 보기</button>
        <a>처음 마커 좌표만 보여줍니다.</a>
        <p>X: {setMarkerInfo.x} Y:{setMarkerInfo.y} </p>
        <MapInfoListView markers = {markers} />
         </>
    )
}

export default Map
