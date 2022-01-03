import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTaskBtn, setShowAddTaskBtn] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React",
      day: "Monday",
      reminder: "Study Hard"
    },
    {
      id: 2,
      text: "Get a awesome job",
      day: "Tuesday",
      reminder: "Prepare well"
    },
    {
      id: 3,
      text: "Earn awesom money",
      day: "Wednesday",
      reminder: "Marry Tannavi"
    }
  ]);
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    // console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTaskBtn(!showAddTaskBtn)}
        showAdd={showAddTaskBtn}
      />
      {showAddTaskBtn && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks are available."
      )}

      {/* <Header title="Saurabh" /> */}
    </div>
  );
}

export default App;
