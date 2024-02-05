import { gql } from "@apollo/client";
import { Icons } from "..";

export type Nation = {
  name: string;
  title: string;
  color: string;
  icons: Icons;
}

export const GET_LIST_NATIONS = gql`
  query GetListNations {
    nations {
      name
      title
      icons {
        medium
        small
      }
      color
    }
  }
`