// import { AppDataSource } from "./infrastructure/database/data-source.js";

// AppDataSource.initialize()
//     .then(() => {
//         console.log("Database connected successfully!");
//     })
//     .catch((error) => {
//         console.error("Database connection failed:", error);
//     });

import express from "express";
import taskRoutes from "./interfaces/routes/taskRoutes.js";
import { AppDataSource } from "./infrastructure/database/data-source.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/tasks", taskRoutes);

AppDataSource.initialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });