import Expanses from "./components/Expanses/Expanses";
import NewExpanse from "./components/Expanses/NewExpanse/NewExpanse";

function App() {
    const expanses = [
        {
            id: 'e1',
            title: 'Car Insurance',
            amount: 265.97,
            date: new Date(2022, 3, 19)
        },
        {
            id: 'e2',
            title: 'Toilet Paper',
            amount: 10.27,
            date: new Date(2022, 2, 16)
        },
        {
            id: 'e3',
            title: 'Fruits',
            amount: 37.19,
            date: new Date(2022, 1, 15)
        },
        {
            id: 'e3',
            title: 'Table',
            amount: 76.90,
            date: new Date(2022, 0, 10)
        },
    ]
  return (
    <div>
        <NewExpanse />
       <Expanses allExpanses={expanses}/>
    </div>
  );
}

export default App;
