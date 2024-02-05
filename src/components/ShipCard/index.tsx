import { VehicleItem } from "../../graphql/vehicles/ListVehicles";
import "./styles.scss"


export const ShipCard = ({
  vehicle
}: {
  vehicle: VehicleItem;
}) => {

  return <div className="ShipCard">
    <img src={vehicle?.nation?.icons?.large} alt={vehicle?.title} height={60} width={120} />
    <div className="ShipCard__Info">
      <img src={vehicle?.icons?.small} alt={vehicle?.title} height={40} width={120} />
      <span className="ShipCard__Name">{vehicle?.title}</span>
    </div>
  </div>;
};
