import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New Yourk", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) => {  console.log(item); }

  // return <div><ListGroup items={items} heading={'Cities'} onSelectItem={handleSelectItem}/></div>
  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <>
      <div> {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>}
      </div>
      <div>
        <Button onClick={() => setAlertVisibility(true)}> Button text</Button>
      </div>
    </>
  );
}


export default App;
