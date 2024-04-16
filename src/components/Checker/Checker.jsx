import { useEffect, useState } from "react";

// styles
import './Checker.scss';
import StyledInput from "../StyledInput/StyledInput";
import StyledButton from "../StyledButton/StyledButton";

function Checker() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  function isUkrainianLicensePlate(input) {
    const ukrainianLicensePlateRegex = /^[A-Z]{2}\d{4}[A-Z]{2}$/
    const ukrainianVinCodeRegex = /^[A-Z0-9]{17}$/
  
    return ukrainianLicensePlateRegex.test(input) || ukrainianVinCodeRegex.test(input)
  }
  
  const check = () => {
    console.log(value)
  };

  useEffect(()=> {
    if (value)
      setIsValid(isUkrainianLicensePlate(value));
  }, [value, isValid])

  return (
    <div className="check-wrapper">
      <StyledInput value={value} onChange={(e) => setValue(e.target.value)} />
      <StyledButton onClick={check} disabled={!isValid}>Перевірити</StyledButton>
    </div>
  );
}

export default Checker;
