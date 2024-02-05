import { useContext } from "react"
import { MainContext } from "../../App"
import { useQuery } from "@apollo/client"
import { GET_VEHICLE, VehicleInfo } from "../../graphql/vehicles/ListVehicles"

import "./styles.scss"

export const ShipDetails = () => {
  const {
    vehicle,
  } = useContext(MainContext)
  
  const { data } = useQuery<{ vehicles: VehicleInfo[] }>(GET_VEHICLE, {
    variables: {
      vehicleId: vehicle?.id,
    }
  })
  const vehicleInfo = data?.vehicles[0]
  
  return <div className="ShipInfo">
    <div>
      <span className="ShipInfo__Item">Название</span>: {vehicleInfo?.title}
      <br />
      <span className="ShipInfo__Item">Страна</span>: {vehicleInfo?.nation?.title}
      <br />
      <span className="ShipInfo__Item">Уровень</span>: {vehicleInfo?.level}
      <br />
      <span className="ShipInfo__Item">Тип</span>: {vehicleInfo?.type?.title}
      <br />
      <span className="ShipInfo__Item">Описание</span>: {vehicleInfo?.description}
    </div>
  </div>
}