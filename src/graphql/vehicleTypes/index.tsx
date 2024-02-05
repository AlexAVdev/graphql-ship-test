import { gql } from "@apollo/client";
import { Icons } from "..";

export type VehicleTypeItem = {
  name?: string;
  title?: string;
  icons?: Icons;
};

export const GET_LIST_VEHICLE_TYPES = gql`
  query GetListVehicleTypes {
    vehicleTypes {
      name
      title
    }
  }
`