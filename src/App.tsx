// import ListGroup from "./components/ListGroup";
import Kanban from "./components/Kanban/Kanban";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "Paris", "Rio de Janeiro"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      <Kanban />
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
