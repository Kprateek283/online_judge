import express from "express";
import cors from 'cors';
import router from './routes/routes.js';
import { DBConnection } from "./database/db.js";
import cookieParser from "cookie-parser";

import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // your frontend URL
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/', router);

DBConnection();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));