import "./Editor.css"
import { useState } from "react";
import { getFormattedDate } from "../util";
import Button from "../component/Button";
import { Navigate, useNavigate } from "react-router-dom";
// initData -> 입력창 또는 수정창에서 다르게 보여질 입력 내용
// 수정 -> 기존에 입력한 내용이 출력되어야 함
// onSubmit -> 작성 완료 버튼을 클릭했을 때 실행되는 이벤트 핸들러 함수
const Editor = ({initData, onSubmit }) => { 

    // const [date, setDate] = useState("");
    // const [emotionId, setImotionId] = useState(3);
    // const [content, setContent] = useState("");
    const [state, setState] = useState(
        { 
            date : getFormattedDate(new Date()),
            emotionId : 3,
            content : ""
        });

    const handleChangeDate = (e) => {
        setState({ 
            ...state, // state 객체 내의 속성값 변경하기
            date : e.target.value
        });
    }   
    const onChangeContent = (e) => {
        setState({ 
            ...state,
            content : e.target.value
        });
    }   
    const handleSubmit = () => {
        onSubmit(state);
    }

    // 취소 버튼 이벤트 핸들러. 이전 페이지로 이동
    const navigate = useNavigate();
    const handleOnGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="Editor">
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                {/* 날짜 입력 창 */}
                <div className="input_wrapper">
                    <input type="date" value={state.date} onChange={handleChangeDate} />
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 감정</h4>
                {/* 감정 이미지 선택 창 */}
            </div>
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                {/* 일기 입력 또는 수정 창 */}
                <textarea 
                    value={state.content} 
                    onChange={onChangeContent}
                    placeholder="오늘은 어땠나요?" 
                />
            </div>
            <div className="editor_section bottom_section">
                {<Button text={"작성 취소"} onClick={handleOnGoBack} />}
                {<Button type={"positive"} text={"작성 완료"} onClick={handleSubmit}/>}
            </div>
        </div>
    );
}
export default Editor;