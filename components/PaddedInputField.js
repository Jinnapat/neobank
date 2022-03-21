const PaddedInputField = ({type, placeholder, setter, value, size, other}) => {
    const updateState = (e) => {
        setter(e.target.value)
    }

    return (
        <input
            className={'p-2 border-2 rounded' + (size ? " " + size: "")}
            type={type}
            onChange={updateState}
            placeholder={placeholder}
            value={value}
            {...other}
        />
    )
}

export default PaddedInputField