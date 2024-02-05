import { useQuery } from "@apollo/client"
import Slider from "react-slick";
import { GET_LIST_VEHICLES, VehicleItem } from "../../graphql/vehicles/ListVehicles"
import { ShipCard } from "../ShipCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const { data } = useQuery<{ vehicles: VehicleItem[] }>(GET_LIST_VEHICLES)

  return <div className="slider-container">
    <Slider {...settings}>
      {
        data?.vehicles?.map(vehicle => (
          <ShipCard vehicle={vehicle} />
        ))
      }
    </Slider>
  </div>

  
}