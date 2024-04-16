// styles
import './PinnedOperation.scss';

function PinnedOperation({operation}) {
  return (
    <div className="operation-container">
      <p className="operation-info">Date Registered: {operation.registered_at}</p>
      <p className="operation-info">Model: {operation.model}</p>
      <p className="operation-info">Department: {operation.department}</p>
      <p className="operation-info">Operation: {operation.operation.ua}</p>
    </div>
  )
}

export default PinnedOperation
