import { createContext, useState } from 'react';
import { ShipList } from "./components/ShipList";
import { VehicleItem } from './graphql/vehicles/ListVehicles';
import { Nation } from './graphql/nations';
import { ShipDetails } from './components/ShipDetails';

export const MainContext = createContext<{
  vehicle?: VehicleItem | null;
  nation?: Nation | null;
  level?: number | null;
  type?: string | null;
  changeVehicle?: (vehicle: VehicleItem) => void;
  changeNation?: (nation: Nation) => void;
  changeLevel?: (level: number) => void;
  changeType?: (type: string) => void;
}>({});

function App() {
  const [vehicle, setVehicle] = useState<VehicleItem | null>(null);
  const [nation, setNation] = useState<Nation | null>(null);
  const [level, setLevel] = useState<number | null>(null);
  const [type, setType] = useState<string | null>(null);

  const changeVehicle = (item: VehicleItem) => {
    !!setVehicle && setVehicle(item)
  }
  const changeNation = (item: Nation) => {
    !!setNation && setNation(item)
  }
  const changeLevel = (item: number) => {
    !!setLevel && setLevel(item)
  }
  const changeType = (item: string) => {
    !!setType && setType(item)
  }

  const context = {
    vehicle,
    nation,
    level,
    type,
    changeVehicle,
    changeNation,
    changeLevel,
    changeType,
  }

  return (
    <MainContext.Provider value={context}>
      <div className="App">
        <ShipDetails />
        <ShipList />
      </div>
    </MainContext.Provider>
  );
}

export default App;
