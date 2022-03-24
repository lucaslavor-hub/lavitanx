import { Example, LocomotiveScrollComponent } from './components/index';

function App() {

  return (
    <>
      <LocomotiveScrollComponent>
        <Example someText="Test 1" />
        <Example someText="Test 2" />
      </LocomotiveScrollComponent>
    </>
  )
}

export default App
