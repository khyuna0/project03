import './Button.css';

const Button = ({text, type, onClick}) => {

    const btnType = ["positive", "negative"].includes(type) ? type: "default";
    // positive => 버튼의 클래스 이름이 Button Button_positive
    return (
        <button className={["Button", `Button_${btnType}`].join(" ")} onClick={onClick}>{text}</button>
    );
};

export default Button;