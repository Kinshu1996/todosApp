import express from 'express';
import env from "dotenv";
import cors from 'cors'

import Connection from './database/db.js';
import Routes from './routes/route.js';
import parser from 'body-parser'

const app = express();
env.config();


app.use(parser.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());



app.use('/',Routes);
Connection();
app.listen(process.env.PORT, () => console.log(`Your server is running successfully on PORT ${process.env.PORT}`))