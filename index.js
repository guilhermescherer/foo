import express from 'express';
import MathOperations from './math.js';

const app = express();
const math = new MathOperations();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running')
}) 

app.get('/sum', (req, res) => {
    res.send('5 + 5 = ' + math.sum(5, 5))
}) 

app.listen(3000, () => {
    console.log('Server is listening on 3000')
})