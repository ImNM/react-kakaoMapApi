import './App.css';
import React from 'react'
import KakaoMap from './kakaoMap/index'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {dataInit} from './kakaoMap/Data/MapData'
function App() {
  dataInit();
  return (
    <div >
      <KakaoMap/>
    </div>
  );
}

export default App;
