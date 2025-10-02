import './App.css';
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import Diary from './pages/Dairy';
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useReducer, useRef, useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import EmotionItem from './component/EmotionItem';
// import { getEmotionImgById } from './util';

function reducer (state, action) {
  switch (action.type) {
    // state -> 기존 일기 객체들이 들어있는 배열

    case "CREATE": {
      return [action.data, ...state]
      // 기존 일기들이 들어있는 배열의 맨 앞에 새로운 일기 객체 삽입
    }
    case "UPDATE": {
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? {...action.data} : item
    )};
    case "DELETE": {
      return state.filter((item) => String(item.id) !== String(action.data.id));
    } 
    case "INIT" : {
      return action.data;
    }

    default:
      return state;
  }
}

function App() {

  const mockData = [
    {
      id: "mock1",
      date : new Date().getTime(),
      content : "mock1",
      emotionId : 1,
    },
    {
      id: "mock2",
      date : new Date().getTime(),
      content : "mock2",
      emotionId : 2,
    },
    {
      id: "mock3",
      date : new Date().getTime(),
      content : "mock3",
      emotionId : 3,
    },
  ]

  useEffect(() => {
    dispatch({
      type : "INIT",
      data : mockData
    })
  },[]); // 의존성 배열 [] 로 하면 -> 최초 마운트할때 1번만 실행

  const idRef = useRef(0); // 일기의 아이디 생성 변수
  // const [state, setstate]= useState();
  const [data, dispatch] = useReducer(reducer, []);
  // data -> 일기 객체들이 들어있는 배열
  const onCreate = (date, content, emotionId) => {
    dispatch({
      type:"CREATE",
      data : {
        id : idRef.current,
        date : new Date(date).getTime(),
        content,
        emotionId,
      }
    });
    idRef.current += 1; // 아이디 값 1씩 증가
  }
  // 수정
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch ({
      type : "UPDATE",
      data : {
        id : targetId, // 수정할 일기 객체의 아이디
        date : new Date(date).getTime(),
        content,
        emotionId,
      }

    })
  };

  const onDelete = (targetId) => {
    dispatch ({
      type : "DELETE",
      data : {
        id : targetId
      }
    })
  };


  return (
    <div className="App">
      <div>
        <Link to={"/"}>홈</Link> /
        <Link to={"/new"}>일기쓰기</Link> /
        <Link to={"/diary"}>일기 보기</Link> / 
        <Link to={"/edit"}>일기 수정</Link>
        {/* a 태그 링크 X 다른 페이지 연결 용도로 사용*/}
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />}/>
        <Route path='/diary/:id' element={<Diary />}/>
        <Route path='/edit' element={<Edit />}/>
      </Routes>
    </div>
  );
}

export default App;
