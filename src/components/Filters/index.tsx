import { LevelFilter } from "./LevelFilter"
import { NationFilter } from "./NationFilter"
import { TypeFilter } from "./TypeFilter"

export const Filters = () => {
  return <div>
    <NationFilter />
    <TypeFilter />
    <LevelFilter />
  </div>
}