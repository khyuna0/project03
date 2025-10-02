import { useState } from "react";
import Button from "./Button";
import "./DiaryList.css"
import { useNavigate } from "react-router-dom";


const sortOptionList = [
    {value : "latest" , name : "최신순"},
    {value : "oldest" , name : "오래된 순"}
]

const DairyList = ({data}) => { // home에서 넘어온 props -> 월별 필터링된 일기들의 배열

    // 버튼 하이퍼링크 (new 페이지 이동)
    const navigate = useNavigate();
    const onClickNew = () => {
        navigate("/new");
    }

    const [sortType , setsortType] = useState("latest"); // 정렬 이벤트 핸들러
    const onChangeSortType = (e) => {
        setsortType(e.target.value);
    };

    return (
        <div className="DiaryList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <select onChange={onChangeSortType} value={sortType}>
                        {sortOptionList.map((item, idx)=> (
                            <option key={idx} value={item.value}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="right_col">
                    <Button text={"새 일기 쓰기"} type={"positive"} onClick={onClickNew}/>
                </div>
            </div>
        </div>
    );
};

export default DairyList;