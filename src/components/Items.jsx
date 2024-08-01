import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import ToDoContext from "../store/ToDoContext";

function Items({ task, index }) {

    const { deleteTask } = useContext(ToDoContext);

    function handleDeleteTask(index) {
        deleteTask(index)
    }

    return (
        <div className="row">
            <div className="col-5">
                {task.task}
            </div>
            <div className="col-4">
                {task.date}
            </div>
            <div className="col-3">
                <button type="button" className="btn btn-outline-danger me-2" onClick={() => handleDeleteTask(index)} >
                    <RiDeleteBin6Line />
                </button>
            </div>
        </div>
    );
}

export default Items;
