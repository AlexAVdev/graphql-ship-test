import { gql } from "@apollo/client";
import { Icons } from "..";
import { Nation } from "../nations";

export type VehicleItem = {
  title: string;
  icons: Pick<Icons, "medium" | "small">;
  level: number;
  type : {
    icons: Pick<Icons, "default">;
  };
  nation: Pick<Nation, "icons">;
}

export const GET_LIST_VEHICLES = gql`
  query GetListVehicles {
    vehicles {
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