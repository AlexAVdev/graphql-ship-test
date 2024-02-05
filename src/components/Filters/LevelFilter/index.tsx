import { useContext } from "react"
import Select from "react-select"
import { MainContext } from "../../../App"

const LEVEL_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const LevelFilter = () => {
  const {
    level,
    changeLevel
  } = useContext(MainContext)

  const levels = LEVEL_LIST?.map(el => (
    { value: el, label: `${el} уровень` }
  ))
  const selectedLevel = LEVEL_LIST?.find(el => el === level)
  const value = {
    value: selectedLevel || "", label: selectedLevel ? `${selectedLevel} уровень` : ""
  }

  return <Select
    className="basic-single"
    classNamePrefix="select"
    isClearable
    // isSearchable
    name="Выбор нации"
    options={levels}
    inputValue={""}
    onChange={(newValue) => !!changeLevel && changeLevel(newValue?.value ? +newValue?.value : null)}
    value={value}
    onInputChange={() => null}
    onMenuOpen={() => null}
    onMenuClose={() => null}
  />
}