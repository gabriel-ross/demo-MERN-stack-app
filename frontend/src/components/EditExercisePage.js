import React, {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

function EditExercisePage({exercises, setExercises}) {

    const {state} = useLocation()
    const navigate = useNavigate()

    const [name, setName] = useState(state.rowData.name);
    const [reps, setReps] = useState(state.rowData.reps);
    const [weight, setWeight] = useState(state.rowData.weight);
    const [unit, setUnit] = useState(state.rowData.unit);
    const [date, setDate] = useState(state.rowData.date);
    
    const [error, setError] = useState(null)

    function modifyExercises(exercises, setExercise, index, updatedExercise) {
        const updatedExercises = [...exercises];
        updatedExercises[index] = updatedExercise;
        setExercise(updatedExercises)
    }

    function onSubmitHandler(e) {
        
        e.preventDefault()

        const updatedExercice = {
            name: name,
            reps: reps,
            weight: weight,
            unit: unit,
            date: date
        };

        fetch(`/exercises/${state.rowData._id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedExercice)
        })
        .then(response => {
            if (response.ok) {
                alert("Exercise modified successfully")
                return response.json()
            }
            throw response
        })
        .then(data => {
            modifyExercises(exercises, setExercises, state.index, data)
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
            <h1>Editing an exercise</h1>
                <input 
                type="text"
                name="name"
                onChange={e => setName(e.target.value)}
                value={name}/>
                <input 
                type="text"
                name="reps"
                onChange={e => setReps(e.target.value)}
                value={reps}/>
                <input 
                type="text"
                name="weight"
                onChange={e => setWeight(e.target.value)}
                value={weight}/>
                <select name="unit" onChange={e => setUnit(e.target.value)} value={unit}>
                <option value="">Select units</option>
                    <option value="kgs">kgs</option>
                    <option value="lbs">lbs</option>
                </select>
                <input 
                type="text"
                name="date"
                onChange={e => setDate(e.target.value)}
                value={date}/><br />
                <input className='clickable' type='submit' value='Submit changes' />
            </form>
        </body>
    )
}

export default EditExercisePage