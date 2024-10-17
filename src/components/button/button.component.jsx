import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    inverted: 'inverted',
    text: 'text-button'
}

const Button = ({ text, buttonType, ...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
            {text}
        </button>
    )
}

export default Button