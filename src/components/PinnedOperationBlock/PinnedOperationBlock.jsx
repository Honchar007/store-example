// components
import PinnedOperation from './components/PinnedOperation/PinnedOperation'
import OperationFunc from './components/OperationFunc/OperationFunc';

// styles
import './PinnedOperationBlock.scss';

function PinnedOperationBlock({ operation, removeOperation}) {
  return (
    <div className='operation-block'>
      { operation ?
      <>
        <PinnedOperation operation={operation} />
        <OperationFunc removeOperation={removeOperation}/>
      </>
      :
      <div>None Pinned Operation</div>}
    </div>
  )
}

export default PinnedOperationBlock
