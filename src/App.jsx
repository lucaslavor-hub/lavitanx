import { LocomotiveScrollComponent, FirstComponent } from './components/index';
import "./global.css";

function App() {

  return (
    <>
      <LocomotiveScrollComponent>
        <FirstComponent text="C3, H2" textWidth="100px"/>
        <FirstComponent />
      </LocomotiveScrollComponent>
    </>
  )
}

export default App
