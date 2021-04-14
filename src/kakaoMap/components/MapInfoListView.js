import React,{useEffect, useState} from 'react'
import { Collapse } from 'antd';
import {dataMarker} from '../Data/MapData'
import { SettingOutlined } from '@ant-design/icons';
import {dataInit,datas} from '../Data/MapData'
const { Panel } = Collapse;
/*global kakao*/

function MapInfoListView({markers}) {
//use state 추가 for key event


  const [keyClicked, setkeyClicked] = useState([])
  const [editNum, seteditNum] = useState(100)

  function callback(keys) {  
    console.log(markers)
    const arr=Object.values(keys);   //arr 값은 현재 열려있는 panel 의 값들입니다.

    var changeNum ;
    if(keyClicked.length ===0){
      changeNum = arr[0]
    }
    else if(arr.length === 0){
      changeNum = keyClicked[0]
    }
    else if(arr.length > keyClicked.length){
     arr.map((key)=>{  //이전 상태값과 비교하여 변경분을 이벤트 처리
        var state = false;
        keyClicked.map((clicked) =>{
          if(!(key === clicked)){
            state = true; 
          }
        })
        if(state){
          
          return changeNum = key;
           
         
        }
      })
    }
    else if(arr.length < keyClicked.length){
      keyClicked.map((clicked)=>{  //이전 상태값과 비교하여 변경분을 이벤트 처리
        var state = false;
        arr.map((key) =>{
          if((key === clicked)){
            state = true; 
          }
        })
        if(!state){
          return changeNum = clicked;
        } 
      })
    }
     kakao.maps.event.trigger( markers[changeNum], 'click'); // 클릭 이벤트 트리거
    setkeyClicked(arr);
  }

  const genExtra = (id) => (
    <SettingOutlined
      onClick={event => {
        seteditNum(id)
        event.stopPropagation();
      }}
    />
  );

  const data = datas

  
    return (
        <Collapse  onChange={callback}>
          {data.length && data.map((markerInfo, index)=>(
           

              <Panel header={markerInfo.InfoTitle} key={index} extra={genExtra(markerInfo.id)}>
              <p>{markerInfo.Infodesc}</p>
              </Panel>
          ))}
     
      </Collapse>
    )
}

export default MapInfoListView
