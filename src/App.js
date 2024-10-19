import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (!task.trim()) {
      alert("Please enter a task");
      return;
    }

    if (editingIndex !== null) {
      const updatedTasks = tasks.map((t, index) =>
        index === editingIndex ? task : t
      );
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, task]);
    }

    setTask("");
  };

  const saveTask = () => {
    if (!task.trim()) {
      alert("Please enter a task to save");
      return;
    }

    if (editingIndex !== null) {
      const updatedTasks = tasks.map((t, index) =>
        index === editingIndex ? task : t
      );
      setTasks(updatedTasks);
      setEditingIndex(null);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setEditingIndex(index);
  };

  return (
    <Box className="App" sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        To-Do List
      </Typography>
      <Box
        className="input-container"
        sx={{ display: "flex", marginBottom: 2 }}
      >
        <TextField
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          variant="outlined"
          size="small"
          sx={{ flexGrow: 1, marginRight: 1 }}
        />
        <Button onClick={addTask} variant="contained" color="primary">
          Add
        </Button>
        {editingIndex !== null && (
          <Button
            onClick={saveTask}
            variant="contained"
            color="secondary"
            sx={{ marginLeft: 1 }}
          >
            Save
          </Button>
        )}
      </Box>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
            <IconButton
              onClick={() => deleteTask(index)}
              color="secondary"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={() => editTask(index)}
              color="primary"
              aria-label="edit"
            >
              <EditIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default App;


