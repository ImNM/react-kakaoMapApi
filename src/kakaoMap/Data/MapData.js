
/*global kakao*/


export const dataMarker = [
    {
        id: 0,
        title: '카카오', 
        WGS84X : 33.450705,
        WGS84Y : 126.570677,
        selected : false,
        InfoTitle : "처음",
        Infodesc: "ㅎㅇㅎㅇㅎㅇ~~",
        tags : "jeju",
        imageSrc : 'http://k.kakaocdn.net/dn/QPtC7/btqX09yP4mb/TjDMw3wM9gRNT8Zr7b6kkk/img_110x110.jpg'
    },
    {
        id: 1,
        title: '카카오',
        WGS84X : 33.450936,
        WGS84Y : 126.569477, 
        selected : false,
        InfoTitle : "두번째",
        Infodesc: "두번째잘만들었어요~~",
        tags : "jeju",
        imageSrc :  'http://k.kakaocdn.net/dn/QPtC7/btqX09yP4mb/TjDMw3wM9gRNT8Zr7b6kkk/img_110x110.jpg'
    },
    {
        id: 2,
        title: '카카오',
        WGS84X : 33.450879,
        WGS84Y : 126.569940,  
        selected : false,
        InfoTitle : "세번째",
        Infodesc: "세번째잘만들었어여~",
        tags : "jeju",
        imageSrc :  'http://k.kakaocdn.net/dn/QPtC7/btqX09yP4mb/TjDMw3wM9gRNT8Zr7b6kkk/img_110x110.jpg'
    },
    {
        id: 3,
        title: '카카오',
        WGS84X : 33.45,
        WGS84Y : 126.570738, 
        selected : false,
        InfoTitle : "네번째",
        Infodesc: "카카오가고싶다~~~",
        tags : "jeju",
        imageSrc : "https://avatars.githubusercontent.com/u/13329304?v=4"
    },
    {
        id: 4,
        title: '카카오',
        WGS84X : 37.550792244220375,
        WGS84Y : 126.83973391209254, 
        selected : false,
        InfoTitle : "우리집임",
        Infodesc: "우장산 아이파크",
        tags : "seoul",
        imageSrc : "https://avatars.githubusercontent.com/u/13329304?v=4"
    }
];
export const dataInit = () => {
    const loadeddata =JSON.parse( localStorage.getItem("MapData"))
  
    if(loadeddata !== null){
        console.log("asdfasdf")
        return;
    }
    else{
        localStorage.setItem("MapData", JSON.stringify(dataMarker));
    }



}

export const dataWrapper = ()=>{
 
    const loadeddata =JSON.parse(localStorage.getItem("MapData")) 
    if (loadeddata !== null) {
        console.log(loadeddata)
        return loadeddata;
      }
    else{
    
        return null;
    }
}

export const datas = dataWrapper();

export const dataSave = (data) =>{
    const loadeddata =JSON.parse(localStorage.getItem("MapData")) 
    var state = false;
    var saveindex  = -1;
    loadeddata.map((one,index)=>{
       if( one.id === data.id){
           state =true;
           saveindex = index
       }
    })

    if(state){ //정보수정일때
        loadeddata[saveindex] = data;
    }
    else{  //  정보 수정이 아닐때 
        loadeddata.push(data)
    }
    localStorage.setItem("MapData", JSON.stringify(loadeddata));  
   
 }