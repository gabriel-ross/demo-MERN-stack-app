import React, {useEffect, useState} from 'react';
import './HomePage.css';
import ExerciseTable from '../components/ExerciseTable.js';
import {useNavigate} from 'react-router-dom';

function HomePage({exercises, setExercises}) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        fetch('/exercises', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response
        })
        .then(data => {
            setExercises(data)
        })
        .catch(error => {
            console.log(error)
            setError(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) return "Loading..."
    if (error) return "Error"

    return (
        <div>
            <h1 className='page-title'>Homepage</h1>
            <ExerciseTable exercises={exercises} setExercises={setExercises} />
            <button className='add-exercise-btn' onClick={() => navigate('/add')}>Add an exercise</button>
        </div>
    )
}

export default HomePage