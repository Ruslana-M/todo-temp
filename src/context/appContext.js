import { createContext, useContext, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [listOfTasks, setListOfTasks] = useState([]);

    function addTask(e) {
        e.preventDefault();
        const newText = e.target.newText.value;
        setListOfTasks([...listOfTasks, newText]);
    
        // 1. how does my single task look like?
        // what needs to be displayed as task on UI
        // Answer: a text, a checkbox
    
        // 2. where should i add the task
        // is there is a list of tasks? YES
        // what is a list?
        // [
        //    'lorem 1',
        //    'lorem 2'
        // ]
      }

    return (<AppContext.Provider value={{listOfTasks, addTask}}> {children}</ AppContext.Provider>)
}


const useAppContext = () => {
    return useContext(AppContext)
}


export  {
    AppProvider,
    useAppContext
}