import './styles.css';

const Input = ({
    placeholder, 
    type = "text", 
    id, 
    required = false,
    name,
    onFocus,
    onBlur,
    onChange,
    value,


}) => {
    return (
        <div className="container">
            <input 
                id={id}
                type={type}
                placeholder={placeholder} 
                required={required}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
            />
            <label htmlFor={id}
            >
                {name}
            </label>
        </div>
    )
}

export default Input;






