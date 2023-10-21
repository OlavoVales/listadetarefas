import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskList from './pages/TaskList'
import TaskApp from './pages/TaskApp'

function AppRoutes() {
    const [completedTasks, setcompletedTasks] = React.useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TaskApp />} />
                <Route path='/TaskList' element={<TaskList completedTasks={completedTasks} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes