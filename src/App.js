import './App.css';
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import Diary from './pages/Dairy';
import { Routes, Route, Link } from 'react-router-dom';
// import { getEmotionImgById } from './util';



function App() {
  return (
    <div className="App">
      <div>
        {/* <Link to={"/"}>홈</Link> /
        <Link to={"/new"}>일기쓰기</Link> /
        <Link to={"/diary"}>일기 보기</Link> / 
        <Link to={"/edit"}>일기 수정</Link> */}
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
