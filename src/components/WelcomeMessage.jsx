import { useContext } from "react";
import style from "./WelcomeMessage.module.css"
import ToDoContext from "../store/ToDoContext";
function WelcomeMessage() {

    const { toDoTasks } = useContext(ToDoContext)
    return (
        <>
            {toDoTasks.length === 0 && <h2 className={style.heading}>No task today enjoy!!!</h2>}
        </>
    );
}

export default WelcomeMessage;