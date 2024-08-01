import { useContext, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import ToDoContext from "../store/ToDoContext";

function InputBox() {

    const { addTask } = useContext(ToDoContext);

    let taskRef = useRef()
    let dateRef = useRef()


    function handleAddTask() {
        let task = taskRef.current.value;
        let date = dateRef.current.value;

        addTask(task, date);

        taskRef.current.value = "";
        dateRef.current.value = "";
    }

    return (
        <div className="container text-center my-3 border-bottom">
            <div className="row">
                <div className="col-5">
                    <input type="text" placeholder="Please enter task" ref={taskRef} />
                </div>
                <div className="col-5">
                    <input type="date" ref={dateRef} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-outline-primary mb-3" onClick={handleAddTask} >
                        <IoIosAddCircle />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InputBox