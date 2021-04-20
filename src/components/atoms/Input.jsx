function Input({
    id,
    name,
    type,
    className,
    value,
    isDisabled,
    ...attr
}) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            className={className}
            value={value}
            disabled={isDisabled}
            {...attr}
        />
    );
}

export default Input;