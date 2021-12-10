import express from 'express';
import errorHandler from '../middleware/error_handlers/errorHandler.js';
import {getAllExercises, createExercise, updateExerciseById, deleteExerciseById} from '../repositories/exerciseRepository.js';


const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const db_res = await getAllExercises()
        res.status(200).json(db_res)
    } catch (error) {
        next(error)  // propagate to error handler
    }
});

router.post('/', async (req, res, next) => {
    try {
        const db_res = await createExercise(req.body)
        res.status(201).json(db_res)
    } catch (error) {
        next(error)
    }
});

router.put('/:_id', async (req, res, next) => {
    try {
        const db_res = await updateExerciseById(req.params, req.body)
        res.status(200).json(db_res)
    } catch (error) {
        next(error)
    }
});

router.delete('/:_id', async (req, res, next) => {
    try {
        const db_res = await deleteExerciseById(req.params)
        res.status(204).json(db_res)
    } catch (error) {
        next(error)
    }
});

router.use(errorHandler)

export default router;