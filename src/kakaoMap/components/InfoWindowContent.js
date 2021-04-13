import React from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 75px;
    width: 288px;
    height: 132px;
    margin-left: -144px;
    text-align: left;
    overflow: hidden;
    font-size: 12px;
    font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;
    line-height: 1.5;
`
const InfoTitleWrapper = styled.div`
    padding: 5px 0 0 10px;
    height: 30px;
    background: #fcba03;
    border-bottom: 1px solid #ddd;
    display:flex;
    align-items :center;
    justify-content :center;
    
`
const InfoTitle = styled.p`
    font-size: 18px;
    font-weight: bold;
`

const InfoBody= styled.div`
    width: 286px;
    height: 80px;
    border-radius: 5px;
    border-bottom: 2px solid #ccc;
    border-right: 1px solid #ccc;
    overflow: hidden;
    background: #fff;
`
const InfoAfter =styled.div`
    
  content: "";
  position: absolute;
  left: 45%;
  bottom: 0px;
  border-top: 15px solid #fff;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  border-bottom: none;
  z-index : 100;

`
const InfoDesc =styled.p`
    position: relative;margin: 13px 0 0 90px;height: 75px;
`

function InfoWindowContent() {
 const asdf ="asdf"

        const htmlString = ReactDOMServer.renderToStaticMarkup(
                <>
            <Wrapper>
                <InfoTitleWrapper>
                    <InfoTitle>
                        제목이얌~
                    </InfoTitle>
                </InfoTitleWrapper>
                
                <InfoBody>
                    <InfoDesc>하하하ㅏ</InfoDesc>

                </InfoBody>
                <InfoAfter/>
            </Wrapper>
            
            
           
          
            
            </>
            );
    
    
            return `
       ${htmlString}
    `
}

export default InfoWindowContent


// <div class="info">
//                    <div class="title">
//                        카카오 스페이스닷원
//                        <div class="close" onclick="closeOverlay()" title="닫기"></div>
//                    </div>
//                    <div class="body">
//                        <div class="img">
//                         <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70"/>
//                       </div> 
//                        <div class="desc">
//                            <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div> 
//                            <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>
//                            <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>
//                        </div>
//                    </div>
//                </div>