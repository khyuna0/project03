//import { useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Button from "../component/Button";
import Editor from "../component/Editor";
import Header from "../component/Header";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "../util";
import DairyList from "../component/DiaryList";

// context 설정 됨 -> app 에서 보내준 data, 함수들 사용 가능
const Home = () => {
    // request.getparameter과 유사
    // const [searchParams, SetSearchParams] = useSearchParams();  // 객체 형식
    // console.log(searchParams.get("id"));

    const data = useContext(DiaryStateContext); // data (일기들 배열) 가져오기

    const [filteredData, setFilteredData] = useState([]);

    const onSubmit = () => {
        alert("작성 완료")
    }
    const [pivotDate, setPivotDate] = useState(new Date()); // 기준 날짜
    const onIncreaseMonth = () => { // 월 증가
        setPivotDate ( new Date(pivotDate.getFullYear() ,pivotDate.getMonth() +1));
    }
    const onDecreaseMonth = () => { // 월 감소
        setPivotDate ( new Date(pivotDate.getFullYear() ,pivotDate.getMonth() -1));
    }

    useEffect(() => {

        if (data.length >= 1 ) {
            const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);
            setFilteredData (
                data.filter (
                    (item) => beginTimeStamp <= item.date && item.date <= endTimeStamp
                )
            )
        } else {
            setFilteredData([]);
        }
    },[data, pivotDate]);


    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() +1} 월`

    return (
        <div>
            <Header title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
            /> 
            <DairyList data={filteredData} />
        </div>
    )
}

export default Home;