import React from 'react';
import './ExerciseTable.css';
import ExerciseRow from './ExerciseRow.js';

function ExerciseTable(props) {

    const tableHeaders = [
        "Exercise name",
        "Reps",
        "Weight",
        "Units",
        "Date"
    ]

    const dataFields = [
        "name",
        "reps",
        "weight",
        "unit",
        "date"
    ]

    return (
        <table className='exercise-table'>
            <thead>
                <tr>
                    {tableHeaders.map((header, idx) => (
                        <th key={idx}>{header}</th>
                    ))}
                    <th>Edit entry</th>
                    <th>Delete entry</th>
                </tr>
            </thead>
            <tbody>
                {props.exercises.map((rowData, idx) => <ExerciseRow key={rowData._id} dataFields={dataFields} rowData={rowData} exercises={props.exercises} setExercises={props.setExercises} index={idx} />)}
            </tbody>
        </table>
)}

export default ExerciseTable