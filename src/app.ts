import express,{ Application } from 'express';
//import connectDB from './database/config/db'
//import userRouter from './routes/user.route';
//import Cors from 'cors';

//connectDB(); //connet db
const app: Application = express(); 
//app.use(Cors());
/*app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, PATCH, OPTIONS");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use('/api', userRouter);

export default app;



