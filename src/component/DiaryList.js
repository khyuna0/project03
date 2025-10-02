import { useEffect, useState } from "react";
import Button from "./Button";
import "./DiaryList.css"
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";


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
    const [sortedData, setSortedData] = useState([]); // 정렬한 결과가 저장될 일기 배열
    
    const onChangeSortType = (e) => {
        setsortType(e.target.value);
    };

    useEffect(() => {
        //정렬함수
        const compare = (a,b) => { // a, b 일기객체
            if(sortType == "latest") { // 날짜의 내림차순
                return Number(b.date) - Number(a.date);
            } else { // oldest 날짜의 오름차순
                return Number(a.date) - Number(b.date);
            }
        };
        const copyList = JSON.parse(JSON.stringify(data)); // 깊은 복사 data 복사본 생성
        copyList.sort(compare);
        setSortedData(copyList);
        // data.sort(compare);
        

    },[data, sortType]) // data, sortType 이 바뀔 때마다

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
             <div className="list_wrapper">
                    {sortedData.map((item) => (
                        <DiaryItem key={item.id} {...item}/>
                    ))}
            </div>
        </div>
    );
};

export default DairyList;