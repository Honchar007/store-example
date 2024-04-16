// styles
import './StyledInput.scss';

function StyledInput({type, name, value, onChange, placeholder, className}) {
  return (
    <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-todo ${className}`}
      />
  )
}

export default StyledInput
