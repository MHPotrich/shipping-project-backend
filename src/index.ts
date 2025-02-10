import express from 'express';

const instance = express();
const port: number = 3000;

instance.get('/', (request, response) => {
    response.send('server is running');
});

instance.listen(port, () => {
    console.log(`running on port ${port}`);
});