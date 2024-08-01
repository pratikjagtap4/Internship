import { useState } from 'react'
import './App.css'
import Container from './components/Container'
import Header from './components/Header'
import InputBox from './components/InputBox'
import ItemGroup from './components/ItemGroup'
import WelcomeMessage from './components/WelcomeMessage'
import ToDoContext from './store/ToDoContext'


function App() {
  const [toDoTasks, setToDoTasks] = useState([])


  function addTask(task, date) {
    if (task !== "" && date !== "") {
      setToDoTasks([...toDoTasks, { task: task, date: date }])

    }
  }

  function deleteTask(index) {
    setToDoTasks(toDoTasks.filter((task, i) => i !== index))
  }

  return (
    <ToDoContext.Provider value={{ toDoTasks, addTask, deleteTask }}>
      <Container>
        <div>
          <Header></Header>
          <InputBox ></InputBox>
          <WelcomeMessage ></WelcomeMessage>
          <ItemGroup ></ItemGroup>
        </div>
      </Container>
    </ToDoContext.Provider>

  )
}

export default App
