import React from 'react';
import {MdOutlineEdit} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';

function EditExerciseIcon({rowData, index}) {
    
    const navigate = useNavigate();
    function handleIconClick(rowData) {
        navigate(`/edit/${rowData._id}`, {state: {
            rowData: rowData,
            index: index
        }})
    }

    return (
        <MdOutlineEdit className='clickable' onClick={() => handleIconClick(rowData)} />
    )
}

export default EditExerciseIcon