// custom hook 커스텀 훅 , 사용자 정의 훅

import { useContext, useEffect, useState } from "react";
import {DiaryStateContext} from "../App"
import { useNavigate } from "react-router-dom";

// id로 일기를 불러오고, 해당 id가 없으면 경고창 띄우고 홈으로 돌려보내는 기능
const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [diary, setDiary] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const matchDiary = data.find((item) => (item.id === id)) // 유저가 클릭한 아이디와 일치하는 일기 찾아 반환
        if (matchDiary) { 
            setDiary(matchDiary);
        } else { // 못 찾을 경우 방어
            alert("해당 일기가 존재하지 않습니다.");
            navigate("/")
        }
    },[id, data])
    
    return diary; // 유저가 클릭한 id에 해당하는 일기
};

export default useDiary;