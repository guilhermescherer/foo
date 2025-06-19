import express from 'express';

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running')
}) 

app.listen(3000, () => {
    console.log('Server is listening on 3000')
})