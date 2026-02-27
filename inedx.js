import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({ message: 'servidol coliendo colectamene'});
});


app.get('/nose', (req, res) => {
    res.status(200).json({
        message: 'Solo se que nada se pero si se quien sabra' 
    });
});

const PORT = process.env.Port || 3000;

app.listen(PORT, () => {
    console.log('servidolito coliendo en el puelton3000');
});