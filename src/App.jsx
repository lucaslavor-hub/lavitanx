import { LocomotiveScrollComponent, Orbit } from './components/index';
import "./global.css";

function App() {

  return (
    <>
      <LocomotiveScrollComponent>
        <Orbit text="C3, H2" textWidth="100px"/>
        <Orbit />
      </LocomotiveScrollComponent>
    </>
  )
}

export default App
