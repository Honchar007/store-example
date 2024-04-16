// styles
import StyledButton from '../StyledButton/StyledButton';
import './VehicleCard.scss';

const VehicleCard = ({ vehicle, pinOperation}) => {

  if (!vehicle) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  return (
    <div className="card">
      <img src={vehicle.photo_url} alt={vehicle.model} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{vehicle.vendor} {vehicle.model}</h5>
        <p className="card-text">Year: {vehicle.model_year}</p>
        <p className="card-text">Region: {vehicle.region.name}</p>
        <p className="card-text">Digits: {vehicle.digits}</p>
        <p className="card-text">Stolen: {vehicle.is_stolen ? 'Yes' : 'No'}</p>
        <h6>Operations:</h6>
        <ul className="list-group">
          {vehicle.operations.map((operation, index) => (
            <li key={index} className="list-group-item">
              <p>Date Registered: {operation.registered_at}</p>
              <p>Model: {operation.model}</p>
              <p>Department: {operation.department}</p>
              <StyledButton onClick={() => pinOperation({...operation})}>Pin operation</StyledButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VehicleCard;
