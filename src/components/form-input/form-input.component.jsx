import './form-input.styles.scss'

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className={`input-container ${otherProps.value.length ? 'shrink' : ''}`}>
            <input {...otherProps} />
            {label && (
                <label>
                    {label}
                </label>
            )}
        </div>
    )
}

export default FormInput