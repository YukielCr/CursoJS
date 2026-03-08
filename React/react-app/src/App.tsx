import Card, {CardBody} from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";


/**
 * truthy
 * falsy 
 */


function App() {
  const[data,setData]=useState(["Goku", "Vegeta", "Trunks", "Gohan"]);
  /** 
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list: string[] = ["Goku", "Vegeta", "Trunks", "Gohan"];
  const handSelect=(elemento: string)=>{
    console.log("Imprimiendo: "+elemento);
  };

  return (
  <Card>
    <CardBody title="Hola Mundo" text="Este es el texto"/>
    {list.length !==0 ? (
      <List data={list} onSelect={handSelect}/>
    ) : (
      "No hay elementos"
    )}
    <Button isLoading={isLoading} onClick={handleClick}>
      Hola Mundo
    </Button>
  </Card>
  );
  */
  const AddMinion=() => setData([...data, 'Minion'])
  const delMinion=() => setData(data.slice(0, -1))


  return (
    <Card>
      <Button isLoading={true} onClick={AddMinion}>Agregar Minion</Button>
      <Button isLoading={false} onClick={delMinion}>Eliminar Minion</Button>
      <List data={data}/>
    </Card>
  );
}
export default App;