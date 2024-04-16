// components
import TrashContainer from "../TrashContainer/TrashContainer"

// styles
import './TrashContainerDeep.scss';

function TrashContainerDeep(props) {
  return (
    <div className="trash-container">
      <TrashContainer {...props}/>
    </div>
  )
}

function TrashContainerWrapper({children}) {
  return (
    <div className="trash-container">
      {children}
    </div>
  )
}

export { TrashContainerWrapper };

export default TrashContainerDeep
