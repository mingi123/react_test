import React, { useState } from "react";
import "./style.css";

import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Account from './components/Account';
import Like from './components/Like';
import Write from './components/Write';

export default function App() {

  let [글제목, 글제목변경] = useState(['글쓰기', '좋아요', '위치'])
  let [좋아요, 좋아요변경] = useState(0);

  let name = "NURI"
  // let posts = "오늘의 글"
  let form = { color : 'white', fontSize : '30px' }

  function 제목바꾸기() {
    var newArray = [...글제목]; //deepcopy
    newArray[0] = 'Postname4'; //copy된 값 변경
    글제목변경( newArray ); //변경된 값 렌더링
  }

  // function Modal() {
  //     return(
  //       <div className="modal">
  //         <h2>제목</h2>
  //         <p>날씨</p>
  //         <p>상세내용</p>
  //       </div>
  //     )
  // // }
  // const Routertest = () => (
  //   <Router>
  //     <div>
  //       <ul>
  //         <li><Link to="/">Account</Link></li>
  //         <li><Link to="/like">Like</Link></li>
  //         <li><Link to="/write">Write</Link></li>
  //       </ul>
  
  //       <hr />
  
  //       <Route path="/" component={Account} />
  //       <Route path="/like" component={Like} />
  //       <Route path="/write" component={Write} />
  //     </div>
  //   </Router>
  // );

  // render(<Routertest />, document.getElementById('root'));
  return (
    <div>
      <div className="nav">
        <div style={ form }>
          { name }  {/*변수는 중괄호로*/}
        </div>
      </div>
      
      {/* <div className="nav_details">
        <div style={ form }>
          { name }
        </div>
      </div> */}

      <div className="list">
        <h3>
          { 글제목[0] }
          </h3>
        <p>9월 28일 발행</p>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }
          <span onClick={ ()=>{ 좋아요변경(좋아요 + 1) } }>👍</span>
          { 좋아요 }
        </h3>
        <p>9월 28일 발행</p>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>9월 28일 발행</p>
      </div>
    </div>
    
  );
}