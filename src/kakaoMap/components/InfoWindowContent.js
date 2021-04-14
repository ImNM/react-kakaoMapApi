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

function InfoWindowContent(data) {  //kakao Functions.js 에서 마커 생성시에 데이터가 넘어옴

 console.log(data)

        const htmlString = ReactDOMServer.renderToStaticMarkup(
                <>
            <Wrapper>
                <InfoTitleWrapper>
                    <InfoTitle>
                    {data.InfoTitle}
                    </InfoTitle>
                </InfoTitleWrapper>
                
                <InfoBody>
                    <InfoDesc>{data.Infodesc}</InfoDesc>

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
