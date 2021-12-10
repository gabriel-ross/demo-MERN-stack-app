import Exercise from '../models/exerciseSchema.js';
import InvalidRequestError from '../errors/InvalidRequestError.js';

function getAllExercises() {
    return getExercise({})
}

function getExercise(params) {
    const query = Exercise.find(params)
    return query.exec()
}

function createExercise({name, reps, weight, unit, date}) {
    // validate that unit is in lbs or kgs
    const unitWhitelist = ["lbs", "kgs"]
    if (!unitWhitelist.includes(unit)) {
        throw new InvalidRequestError("Invalid unit type")
    }

    const newExercise = new Exercise({
        name: String(name),
        reps: Number(reps),
        weight: Number(weight),
        unit: String(unit),
        date: String(date)
    })

    return newExercise.save()
}
function updateExerciseById({_id}, params) {

    return Exercise.findById(_id).exec()
                .then(doc => {
                    if (doc) {
                        Object.keys(params).map(key => {
                            if (key !== "_id") {
                                doc[key] = params[key]
                            }
                        })
                        return doc
                    }
                    throw new InvalidRequestError(`No record with id ${_id} found`)
                    
                })
                .then(updatedDoc => {
                    return updatedDoc.save()
                })
                .catch(error => {
                    throw error
                })
}

function deleteExerciseById({_id}) {
    return Exercise.findByIdAndDelete(_id).exec()
}

export {getAllExercises, createExercise, updateExerciseById, deleteExerciseById}