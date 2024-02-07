import { LevelFilter } from "./LevelFilter"
import { NationFilter } from "./NationFilter"
import { TypeFilter } from "./TypeFilter"

import "./styles.scss"

export const Filters = () => {
  return <div className="Filter__Wrapper">
    <NationFilter />
    <TypeFilter />
    <LevelFilter />
  </div>
}