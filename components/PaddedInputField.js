const PaddedInputField = ({type, placeholder, setter,value}) => {
    const updateState = (e) => {
        setter(e.target.value)
    }

    return (
        <input
            className='p-2 border-2 rounded' 
            type={type}
            onChange={updateState}
            placeholder={placeholder}
            value={value}
        />
    )
}

export default PaddedInputField