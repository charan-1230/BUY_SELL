import express from 'express';
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from 'cors';

import { connectDB } from './config/connect_database.js';

import userRoutes from "./routes/userRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors(
    {
        origin: "*",
        credentials: true
    }
));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/orders", orderRoutes);

app.listen(5000, () => {
    connectDB();
    console.log(`Connection Started at http://localhost:5000 `);
});