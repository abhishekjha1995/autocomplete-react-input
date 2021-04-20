import './iconInput.css';
import Icon from '../../atoms/Icon';
import Input from '../../atoms/Input';

function IconInput({
    containerClass = "",
    iconClass = "",
    iconPosition = "start",
    inputClass = "",
    onChangeHandler,
    ...inputAttr
}) {
    return (
        <div className={`container ${containerClass}`}>
            {iconPosition === "start" && <Icon className={`icon ${iconClass}`} />}
            <Input
                className={`input-field ${inputClass}`}
                onChange={onChangeHandler}
                {...inputAttr}
            />
            {iconPosition === "end" && <Icon className={`icon ${iconClass}`} />}
        </div>
    );
}

export default IconInput;