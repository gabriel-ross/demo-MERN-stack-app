import React from 'react';
import DeleteExerciseIcon from './DeleteExerciseIcon.js';
import EditExerciseIcon from './EditExerciseIcon.js';

function ExerciseRow(props) {
    return (
        <tr>
            {props.dataFields.map((key, idx) => (
                <td key={idx}>{props.rowData[key]}</td>
            ))}
            <td>
                <EditExerciseIcon rowData={props.rowData} index={props.index} />
            </td>
            <td>
                <DeleteExerciseIcon _id={props.rowData._id} exercises={props.exercises} setExercises={props.setExercises} index={props.index} />
            </td>
        </tr>
    )
}

export default ExerciseRow