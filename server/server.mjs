import express from "express";
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import indexRouter from "./routes/index.mjs";
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);


if (process.env.NODE_ENV !== 'production') {
    const envPath = path.join(__dirname,'.env');
    dotenv.config({ path: envPath });
    mongoose.connect(process.env.DATABASE_URL)
     console.log("Succesfully connected to the database")
}

const app=express();

app.use('/',indexRouter)

app.listen(process.env.PORT)