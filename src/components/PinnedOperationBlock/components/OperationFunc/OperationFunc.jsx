import StyledButton from "../../../StyledButton/StyledButton"

function OperationFunc({removeOperation}) {
  return (
    <div>
      <StyledButton onClick={()=>removeOperation(null)}>Unpin operation</StyledButton>
    </div>
  )
}

export default OperationFunc
