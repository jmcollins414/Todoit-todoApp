import React, { useState } from 'react';
import AddTaskModal from './AddTaskModal';
import AddCategoryModal from './AddCategoryModal';
import CategoryNav from './CategoryNav';
import TaskList from './TaskList';
import TaskItem from './TaskItem';
import filterCategory from './filterCategory';
import filterComplete from './filterComplete';

export default function App() {
  const randId = () => Math.floor(Math.random() * 43223);
  // states to show modal and modal bg
  const [editing, setEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(false);

  //states to add task to tasklist
  const [taskInput, setTaskInput] = useState('');
  const [task, setTask] = useState({
    text: '',
    id: `${randId()}`,
    category: null,
    priority: false,
    complete: false,
    color: null
  });
  const [taskList, setTaskList] = useState([]);

  //states to set category list
  const [categoryHeader, setCategoryHeader] = useState('Uncategorized');
  const [categoryInput, setCategoryInput] = useState('');
  const [categoryColor, setCategoryColor] = useState(null);
  const [categoryList, setCategoryList] = useState([
    { name: 'Uncategorized', color: 'grey', id: 'uncategorized' }
  ]);
  //states for filters
  const [completionFilter, setCompletionFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('uncategorized');

  const handleCategoryFilter = (e)=>{
    console.log(e.target.id);
    if (categoryFilter === e.target.parentNode.id) {
      return;
    }
    setCategoryHeader(e.target.textContent);
    setCategoryFilter(e.target.id);
  }  
  const handleCategoryInput=(e)=>{
    setCategoryInput(e.target.value);
  }
  const handleCategoryColor = (e)=>{
    setCategoryColor(e.target.id);
  }
  const addCategory=(e)=>{
    e.preventDefault();
    const randId = Math.floor(Math.random() * 43223);
    setCategoryList((prev) => [
      ...prev,
      { name: categoryInput, color: categoryColor, id: `${randId}` }
    ]);
    setEditing(false);
    setCategoryInput('');
    setCategoryColor(null);
  }
  const closeCategoryModal =()=>{
    setEditing(false);
    setCategoryColor(null);
    setCategoryInput('');
  }
  const deleteCategory = (e) => {
    const catId = e.target.id;
    setCategoryList((prev) => prev.filter((item) => item.id !== catId));
  };

  // functions for task modal & tasklist
  const handleNewTask = () => {
    setEditing(true);
    setEditingTask(true);
  };
  const addTask = (e) => {
    e.preventDefault();
    setTaskList((prev) => [task, ...prev]);
    setEditing(false);
    setEditingTask(false);
    setTaskInput('');
    setTask((prev) => ({
      text: '',
      id: `${randId()}`,
      category: null,
      priority: false,
      complete: false
    }));
  };
  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
    setTask((prev) => ({ ...prev, text: e.target.value }));
  };
  const handlePriority = () => {
    setTask((prev) => ({ ...prev, priority: !prev.priority }));
  };
  const handleTaskCategory = (e) => {
    setTask((prev) => ({
      ...prev,
      category: e.target.id,
      color: e.target.value
    }));
  };
  const closeTaskModal = () => {
    setEditing(false);
    setEditingTask(false);
    setTaskInput('');
    setTask((prev) => ({ ...prev, text: '', category: null, priority: false }));
  };
  const handleComplete = (e) => {
    const id = e.target.parentNode.id;
    const updatedList = taskList.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTaskList(updatedList);
  };
  const handleTaskDelete = (e) => {
    const taskId = e.target.parentNode.id;
    setTaskList((prev) => prev.filter((item) => item.id !== taskId));
  };

  const tasks = taskList
    .filter((item) => filterCategory(item, categoryFilter))
    .filter((item) => filterComplete(item, completionFilter))
    .map((item) => (
      <TaskItem
        item={item}
        color={item.color}
        key={item.id}
        id={item.id}
        text={item.text}
        handleDelete={handleTaskDelete}
        handleComplete={handleComplete}
      />
    ));

  return (
    <div className="App">
      <div className="modalBg" style={{ display: editing ? 'flex' : 'none' }}>
        {editingTask ? (
          <AddTaskModal
            value={taskInput}
            task={task}
            handleClick={handleTaskCategory}
            handleSubmit={addTask}
            handleClose={closeTaskModal}
            handlePriority={handlePriority}
            priority={task.priority}
            handleChange={handleTaskInput}
            list={categoryList}
          />
        ) : (
          <AddCategoryModal
            value={categoryInput}
            handleChange={handleCategoryInput}
            handleSubmit={addCategory}
            handleSelection={handleCategoryColor}
            selectedColor={categoryColor}
            input={categoryInput}
            color={categoryColor}
            handleClose={closeCategoryModal}
          />
        )}
      </div>
      <CategoryNav
        list={categoryList}
        category={categoryFilter}
        handleDelete={deleteCategory}
        handleClick={() => setEditing(!editing)}
        handleCategory={handleCategoryFilter}
      />
      <TaskList
        handleNew={handleNewTask}
        complete={completionFilter}
        list={tasks}
        category={categoryHeader}
        handleFilter={(e) => setCompletionFilter(e.target.id)}>
        {tasks}
      </TaskList>
    </div>
  );
}
