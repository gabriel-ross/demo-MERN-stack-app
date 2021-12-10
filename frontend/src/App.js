import React, {useState} from 'react';
import './App.css'
import {Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import EditExercisePage from './components/EditExercisePage.js';
import AddExercisePage from './components/AddExercisePage.js';

function App() {

    const [exercises, setExercises] = useState([])

    return (
        <Routes>
            <Route path="/" element={<HomePage exercises={exercises} setExercises={setExercises} />} />
            <Route path="/edit/:id" element={<EditExercisePage exercises={exercises} setExercises={setExercises} />} />
            <Route path="/add" element={<AddExercisePage exercises={exercises} setExercises={setExercises} />} />
        </Routes>
    );
}

export default App;
