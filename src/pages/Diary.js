import { useParams } from "react-router-dom";

const Diary = () => {
    const {id} = useParams();
    // @pathVariable String id 유사

    return (
        <div>
            Diary
            <h3>{id} 번 일기</h3>
        </div>
    )
}

export default Diary;