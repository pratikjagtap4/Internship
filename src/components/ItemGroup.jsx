import { useContext } from "react";
import Items from "./Items";
import ToDoContext from "../store/ToDoContext";

function ItemGroup() {
    const { toDoTasks } = useContext(ToDoContext)
    return (
        <div className="container text-center my-3 ">
            {toDoTasks.map((task, index) => <Items key={index} task={task} index={index} />)}
        </div>
    );
}

export default ItemGroup;


