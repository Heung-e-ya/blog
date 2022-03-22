/* eslint-disable */
import React , { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','남자 체형별 패션', '강남 맛집', '코로나 거리두기 단계']);
  

  let posts = '강남 고기 맛집';
  const [counter, setCounter] = React.useState(0);
  const onClick =() =>{
    
    setCounter((current) => current + 1);
    
  }
  const 제목바꾸기 =()=>{
    var newArray = [...글제목];
    newArray[0] ='여자 코트 추천'
    글제목변경(newArray);
  };
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <button onClick={제목바꾸기}>여자</button>
        <h3> { 글제목[0] } <span onClick={onClick}>👍</span>{counter}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] }</h3>
        <p>2월 1일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[3] }</h3>
        <p>2월 21일 발행</p>
        <hr/>
      </div>
      
      <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
