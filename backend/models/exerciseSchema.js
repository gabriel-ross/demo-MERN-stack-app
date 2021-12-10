import mongoose from 'mongoose';

const ExerciseSchema = mongoose.Schema({
    name: {type: String, required: true},
    reps: {type: Number, required: true},
    weight: {type: Number, required: true},
    unit: {type: String, required: true},
    date: {type: String, required: true}
})

const Exercise = mongoose.model('Exercise', ExerciseSchema)
export default Exercise