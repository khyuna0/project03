//import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Editor from "../component/Editor";
import Header from "../component/Header";

// Button 컴포넌트 props -> 버튼의 이름 text, 이벤트 핸들러 onClick
const Home = () => {
    // request.getparameter과 유사
    // const [searchParams, SetSearchParams] = useSearchParams();  // 객체 형식
    // console.log(searchParams.get("id"));

    const onSubmit = () => {
        alert("작성 완료")
    }
    return (
        <div>
            <Header title={"HOME"}
                leftChild={<Button type={"positive"} text={"긍정 버튼"} onClick={() => {
                alert("긍정 버튼")
            }}/>}
                rightChild={<Button type={"negative"} text={"부정 버튼"} onClick={() => {
                alert("부정 버튼")
            }}/>}
            /> 
            <Editor onSubmit={onSubmit}/>
        </div>
    )
}

export default Home;