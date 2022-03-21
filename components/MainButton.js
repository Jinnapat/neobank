const MainButton = ({children, onClick}) => {
    return (
        <button className="bg-blue-600 px-5 py-2 rounded-xl text-white" onClick={onClick}>
            {children}
        </button>
    )
}

export default MainButton