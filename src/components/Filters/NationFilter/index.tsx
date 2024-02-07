import { useContext } from "react"
import { useQuery } from "@apollo/client"
import { GET_LIST_NATIONS, Nation } from "../../../graphql/nations"
import Select from "react-select"
import { MainContext } from "../../../App"

import "../styles.scss"

export const NationFilter = () => {
  const {
    nationName,
    changeNation
  } = useContext(MainContext)
  const { data, loading } = useQuery<{ nations: Nation[] }>(GET_LIST_NATIONS)

  const defaultOption = { name: "", title: "Нация" }
  const nations = data?.nations?.map(el => (
    { value: el.name, label: el.title }
  ))
  const selectedNation = data?.nations?.find(el => el.name === nationName) || defaultOption
  const value = {
    value: selectedNation?.name || "", label: selectedNation?.title || ""
  }

  return <div className="Filter__Select">
    <Select
      className="basic-single"
      classNamePrefix="select"
      isLoading={loading}
      isClearable
      // isSearchable
      name="Выбор нации"
      options={nations}
      inputValue={""}
      onChange={(newValue) => !!changeNation && changeNation(newValue?.value || "")}
      value={value}
      onInputChange={() => null}
      onMenuOpen={() => null}
      onMenuClose={() => null}
    />
  </div>
}