import { createContext, useState } from 'react';
import { ShipList } from "./components/ShipList";
import { VehicleItem } from './graphql/vehicles/ListVehicles';
import { ShipDetails } from './components/ShipDetails';
import { Filters } from './components/Filters';

import "./styles.scss"

export const MainContext = createContext<{
  vehicle?: VehicleItem | null;
  nationName?: string | null;
  level?: number | null;
  type?: string | null;
  changeVehicle?: (vehicle: VehicleItem) => void;
  changeNation?: (nation: string) => void;
  changeLevel?: (level: number | null) => void;
  changeType?: (type: string) => void;
}>({});

function App() {
  const [vehicle, setVehicle] = useState<VehicleItem | null>(null);
  const [nationName, setNationName] = useState<string | null>(null);
  const [level, setLevel] = useState<number | null>(null);
  const [type, setType] = useState<string | null>(null);

  const changeVehicle = (item: VehicleItem) => {
    !!setVehicle && setVehicle(item)
  }
  const changeNation = (item: string) => {
    !!setNationName && setNationName(item)
  }
  const changeLevel = (item: number | null) => {
    !!setLevel && setLevel(item)
  }
  const changeType = (item: string) => {
    !!setType && setType(item)
  }

  const context = {
    vehicle,
    nationName,
    level,
    type,
    changeVehicle,
    changeNation,
    changeLevel,
    changeType,
  }

  return (
    <MainContext.Provider value={context}>
      <div className="App Wrapper">
        <div className="Header">
          <Filters />
        </div>
        <div className="Main" style={{
          backgroundImage: `url('${vehicle?.icons.medium}')`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100%"
        }}>
          <ShipDetails />
        </div>
        <div className="ShipList">
          <ShipList />
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;
