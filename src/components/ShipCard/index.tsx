import { useContext } from "react";
import { VehicleItem } from "../../graphql/vehicles/ListVehicles";
import { MainContext } from "../../App";
import "./styles.scss"

export const ShipCard = ({
  vehicle
}: {
  vehicle: VehicleItem;
}) => {
  const {
    vehicle: selectedVehicle,
    changeVehicle,
  } = useContext(MainContext)

  const isActive = selectedVehicle?.id === vehicle.id
  const onCardClick = () =>
    !!changeVehicle && changeVehicle(vehicle)

  return <div className={`ShipCard ${isActive ? "ShipCard__Active" : ""}`} onClick={onCardClick}>
    <img src={vehicle?.nation?.icons?.large} alt={vehicle?.title} height={60} width={120} />
    <div className="ShipCard__Info">
      <img src={vehicle?.icons?.small} alt={vehicle?.title} height={40} width={120} />
      <span className="ShipCard__Name">{vehicle?.title}</span>
    </div>
  </div>;
};
