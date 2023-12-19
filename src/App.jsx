import { useAppContext } from "./context/appContext";
import "./App.css";

function App() {
  const {listOfTasks, addTask} = useAppContext()



  return (
    <div className="App">
      <form onSubmit={addTask}>
        <input type="text" name="newText" />
        <button>Add Task</button>
      </form>
      <div>
        {listOfTasks.length === 0 && <p>No Task Present. Please add task </p>}

        {listOfTasks.map((text, index) => (
          <div key={index}>
            <input type="checkbox" />
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
