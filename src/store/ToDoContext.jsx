import { createContext } from "react";

const ToDoContext = createContext(
    {
        toDoTasks: [],
        addTask: () => {

        },
        deleteTask: () => {

        }
    }
)
export default ToDoContext;
