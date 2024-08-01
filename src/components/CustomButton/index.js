import './index.css'

const CustomButton = (props) => {
    const {text, bgColor, textColor, height, width, radius} = props
    return(
        <button className='custom-button' style={{
            backgroundColor: `${bgColor}`,
            color: `${textColor}`,
            height: `${height}`,
            width: `${width}`,
            borderRadius: `${radius}`
        }}>{text}</button>
    )
}

export default CustomButton