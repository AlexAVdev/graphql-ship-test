import { useContext } from "react"
import { useQuery } from "@apollo/client"
import Select from "react-select"
import { MainContext } from "../../../App"
import { GET_LIST_VEHICLE_TYPES, VehicleTypeItem } from "../../../graphql/vehicleTypes"

import "../styles.scss"

export const TypeFilter = () => {
  const {
    type,
    changeType
  } = useContext(MainContext)
  const { data, loading } = useQuery<{ vehicleTypes: VehicleTypeItem[] }>(GET_LIST_VEHICLE_TYPES)

  const defaultOption = { name: "", title: "Тип" }
  const vehicleTypes = data?.vehicleTypes?.map(el => (
    { value: el.name || "", label: el.title || "" }
  ))
  const selectedType = data?.vehicleTypes?.find(el => el.name === type) || defaultOption
  const value = {
    value: selectedType?.name || "", label: selectedType?.title || ""
  }

  return <div className="Filter__Select"> 
    <Select
      className="basic-single"
      classNamePrefix="select"
      isLoading={loading}
      isClearable
      // isSearchable
      name="Выбор типа"
      options={vehicleTypes}
      inputValue={""}
      onChange={(newValue) => !!changeType && changeType(newValue?.value || "")}
      value={value}
      onInputChange={() => null}
      onMenuOpen={() => null}
      onMenuClose={() => null}
    />
  </div>
}