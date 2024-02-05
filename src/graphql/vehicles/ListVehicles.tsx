import { gql } from "@apollo/client";
import { Icons } from "..";
import { Nation } from "../nations";

export type VehicleItem = {
  id: string;
  title: string;
  icons: Pick<Icons, "medium" | "small">;
  level: number;
  type : {
    name: string;
    icons: Pick<Icons, "default">;
  };
  nation: Pick<Nation, "icons" | "name">;
}
export type VehicleInfo = VehicleItem & {
  description: string;
  type: {
    title: string;
  }
  nation: Nation;
}

export const GET_LIST_VEHICLES = gql`
  query GetListVehicles {
    vehicles {
      id
      title
      icons {
        medium
        small
      }
      level
      type {
        name
        icons {
          default
        }
      }
      nation {
        name
        icons {
          large
        }
      }
    }
  }
`

export const GET_VEHICLE = gql`
  query GetVehicle($vehicleId: String) {
    vehicles(vehicleId: $vehicleId) {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`