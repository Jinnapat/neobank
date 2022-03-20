const CircleContainer = ({value, title, color}) => {

    const getClassName = (color) => {
        return "rounded-full border-4 w-36 h-36 flex flex-col justify-center text-center border-" + color
    }

    return (
        <div className={getClassName(color)}>
            <span>{title}</span>
            <span>{value}</span>
        </div>
    )
}

export default CircleContainer