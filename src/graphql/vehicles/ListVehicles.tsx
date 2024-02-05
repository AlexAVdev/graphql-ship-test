import { gql } from "@apollo/client";
import { Icons } from "..";
import { Nation } from "../nations";

export type VehicleItem = {
  id: string;
  title: string;
  icons: Pick<Icons, "medium" | "small">;
  level: number;
  type : {
    icons: Pick<Icons, "default">;
  };
  nation: Pick<Nation, "icons">;
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
        icons {
          default
        }
      }
      nation {
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