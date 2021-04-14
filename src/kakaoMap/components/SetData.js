import React,{useState,useEffect} from 'react'
import { datas,dataSave } from '../Data/MapData'

function SetData({editNum}) {
    const [Id, setId] = useState("")
    const [title, settitle] = useState("")
    const [WGS84X, setWGS84X] = useState("")
    const [WGS84Y, setWGS84Y] = useState("")
    const [Infotitle, setInfotitle] = useState("")
    const [Infodesc, setInfodesc] = useState("")
    const [tags, settags] = useState("")
    const [imageSrc, setimageSrc] = useState("")
    const handleIdChange = (e) => setId(e.target.value)
    const handletitleChange = (e) => settitle(e.target.value)
    const handleWGS84XChange = (e) => setWGS84X(e.target.value)
    const handleWGS84YChange = (e) => setWGS84Y(e.target.value)
    const handleInfotitleChange = (e) => setInfotitle(e.target.value)
    const handleInfodescChange = (e) => setInfodesc(e.target.value)
    const handletagsChange = (e) => settags(e.target.value)
    const handleimageSrcChange = (e) => setimageSrc(e.target.value)


    useEffect(() => {
        editSet(editNum); //children function of interest
      }, [editNum]);
    
    const saveButton = ()=>{
        
        const markerSave = {
            id: Number(Id),
            title: title,
            WGS84X :Number (WGS84X),
            WGS84Y : Number(WGS84Y),
            selected : false,
            InfoTitle : Infotitle,
            Infodesc: Infodesc,
            tags : tags,
            imageSrc :  imageSrc
        }
        const keys = Object.keys(markerSave) // ['name', 'weight', 'price', 'isFresh']

            for (let i = 0; i < keys.length; i++) {
        const key = keys[i] // 각각의 키
        const value = markerSave[key] // 각각의 키에 해당하는 각각의 값

        if(value ===""){
            return alert('빈칸없이 입력하세용')
        }
        }
        
        dataSave(markerSave);
        alert("저장 성공~");
        setId("");settitle("");setWGS84X("");setWGS84Y("");setInfotitle("");setInfodesc("");settags("");setimageSrc("");
    }

    const editSet = (editNum) =>{
        datas.map((data)=>{if(data.id === editNum){
            setId(data.id);settitle(data.title);setWGS84X(data.WGS84X);setWGS84Y(data.WGS84Y);setInfotitle(data.InfoTitle);setInfodesc(data.Infodesc);settags(data.tags);setimageSrc(data.imageSrc);
                 }
             })
    }

    return (
        <div>
            <input  placeholder="Id"  value={Id} onChange={handleIdChange} ></input>
            <input  placeholder="title" value={title} onChange={handletitleChange} ></input>
            <input  placeholder="경도"  value={WGS84Y} onChange={handleWGS84YChange} ></input>
            <input  placeholder="위도"   value={WGS84X} onChange={handleWGS84XChange} ></input>
            <input  placeholder="Infotitle" value={Infotitle} onChange={handleInfotitleChange} ></input>
            <input  placeholder="Infodesc" value={Infodesc} onChange={handleInfodescChange} ></input>
            <input  placeholder="tags" value={tags} onChange={handletagsChange} ></input>
            <input  placeholder="imageSrc" value={imageSrc} onChange={handleimageSrcChange} ></input>
          
            <button onClick ={saveButton}>정보저장</button>
        </div>
    )
}

export default SetData
