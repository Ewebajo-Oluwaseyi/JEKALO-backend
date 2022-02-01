import app from './app';

//set port
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log('server running'))