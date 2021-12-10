import express from 'express';
import mongoose from 'mongoose';
import exercises from './controllers/exerciseController.js';

const PORT = 3000;
const app = express();

// middleware for handling HTTP requests
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// connect to database
mongoose.connect(
    "mongodb://localhost:27017/cs290_assignment6_db",
    {useNewUrlParser: true}
);
const db = mongoose.connection;
db.on('connected', () => {
    console.log('Connected to database');
});
db.on('error', (err) => {
    console.log(`Error connecting to database: ${err}`);
});

// include endpoints from controllers
app.use('/exercises', exercises);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});