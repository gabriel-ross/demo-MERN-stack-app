import React from 'react';
import {AiFillDelete} from 'react-icons/ai'

function DeleteExerciseIcon({_id, exercises, setExercises, index}) {

    function removeExercise(exercises, setExercises, index) {
        const updatedExercises = exercises.filter((val, idx) => {
            return idx !== index;
        })
        setExercises(updatedExercises)
    }
    
    function onClickHandler(_id) {
        fetch(`/exercises/${_id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        removeExercise(exercises, setExercises, index)
    }

    return (
        <AiFillDelete className='clickable' onClick={() => onClickHandler(_id)} />
    )
}

export default DeleteExerciseIcon