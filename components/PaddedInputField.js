const PaddedInputField = ({type, placeholder, setter}) => {
    const updateState = (e) => {
        setter(e.target.value)
    }

    return (
        <input
            className='p-1 border-2' 
            type={type}
            onChange={updateState}
            placeholder={placeholder}
        />
    )
}

export default PaddedInputField