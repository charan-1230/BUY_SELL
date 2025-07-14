import express from 'express';
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

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

const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/orders", orderRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,"../frontend","dist", "index.html"));
    });
}

app.listen(5000, () => {
    connectDB();
    console.log(`Connection Started at http://localhost:5000 `);
});