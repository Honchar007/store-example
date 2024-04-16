// styles
import "./StyledButton.scss";

function StyledButton({ onClick, style, disabled, children }) {
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ ...style, opacity: disabled ? 0.5 : 1 }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default StyledButton;
