import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function AddExercisePage({exercises, setExercises}) {

    const[name, setName] = useState("")
    const [reps, setReps] = useState("")
    const [weight, setWeight] = useState("")
    const [unit, setUnit] = useState("")
    const [date, setDate] = useState("")

    const [error, setError] = useState(null)

    const navigate = useNavigate()

    function addExercise(exercises, setExercises, newExercise) {
        const updatedExercises = [...exercises, newExercise]
        setExercises(updatedExercises)
    }

    function onSubmitHandler(e) {

        e.preventDefault()

        const newExercise = {
            name: name,
            reps: reps,
            weight: weight,
            unit: unit,
            date: date
        };

        fetch('/exercises', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newExercise)
        })
        .then(response => {
            if (response.ok) {
                alert("Exercise successfully added")
                return response.json()
            }
            throw response
        })
        .then(data => {
            addExercise(exercises, setExercises, data)
        })
        .catch(error => {
            alert("Error adding exercise")
            console.log(error)
            setError(error)
        })
        .finally(() => {
            navigate('/')
        })
    }

    if (error) return "Error..."

    return (
        <body>
            <form onSubmit={e => onSubmitHandler(e)} className='exercise-form'>
                <h1>Adding an exercise</h1>
                <input 
                type="text"
                name="name"
                onChange={e => setName(e.target.value)}
                placeholder="Exercise name"
                value={name}/>
                <input 
                type="text"
                name="reps"
                onChange={e => setReps(e.target.value)}
                placeholder="Number of reps"
                value={reps}/>
                <input 
                type="text"
                name="weight"
                onChange={e => setWeight(e.target.value)}
                placeholder="Weight"
                value={weight}/>
                <select name="unit" onChange={e => setUnit(e.target.value)} placeholder="Unit" value={unit}>
                    <option value="">Select units</option>
                    <option value="kgs">kgs</option>
                    <option value="lbs">lbs</option>
                </select>
                <input 
                type="text"
                name="date"
                onChange={e => setDate(e.target.value)}
                placeholder="Date"
                value={date}/><br />
                <input className='clickable' type='submit' value='Add exercise' />
            </form>
        </body>
    )
}

export default AddExercisePage