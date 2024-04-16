function TrashContainer({...props}) {
  const {count} = props;
  return (
    <div className="trash-container">
      {count}
    </div>
  )
}

export default TrashContainer
