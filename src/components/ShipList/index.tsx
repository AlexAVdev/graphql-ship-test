import { useQuery } from "@apollo/client"
import Slider from "react-slick";
import { GET_LIST_VEHICLES, VehicleItem } from "../../graphql/vehicles/ListVehicles"
import { ShipCard } from "../ShipCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useMemo } from "react";
import { MainContext } from "../../App";

const settings = {
  className: "center",
  centerPadding: "60px",
  slidesToShow: 7,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 7,
};

export const ShipList = () => {
  const {
    nationName,
    type,
    level,
  } = useContext(MainContext)
  const { data } = useQuery<{ vehicles: VehicleItem[] }>(GET_LIST_VEHICLES)

  const filterByNation = (vehicles?: VehicleItem[]) => {
    if (!!nationName) {
      return vehicles?.filter(vehicle => vehicle?.nation?.name === nationName)
    }
    return vehicles
  }
  const filterByType = (vehicles?: VehicleItem[]) => {
    if (!!type) {
      return vehicles?.filter(vehicle => vehicle?.type?.name === type)
    }
    return vehicles
  }
  const filterByLevel = (vehicles?: VehicleItem[]) => {
    if (!!level) {
      return vehicles?.filter(vehicle => vehicle?.level === level)
    }
    return vehicles
  }

  const filteredVehicles = useMemo(
    () => filterByNation(filterByType(filterByLevel(data?.vehicles))),
    [nationName, type, level, data?.vehicles]
  )

  return <div className="slider-container">
    <Slider {...settings}>
      {
        filteredVehicles?.map(vehicle => (
          <ShipCard vehicle={vehicle} />
        ))
      }
    </Slider>
  </div>

  
}