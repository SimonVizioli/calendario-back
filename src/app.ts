import express from "express";
import EventRoutes from "./routes/EventRoutes";
import EventScheduleRoutes from "./routes/EventScheduleRoutes";
import ScheduleRoutes from "./routes/ScheduleRoutes";
import ScheduleTypeRoutes from "./routes/ScheduleTypeRoutes";
import UserRoutes from "./routes/UserRoutes";
import UserScheduleRoutes from "./routes/UserScheduleRoutes";
import sequelize from "./config/database";
import dotenv from "dotenv";
import { initModels } from "./models/index";
import loggerMiddleware from "./middlewares/loggerMiddleware";

dotenv.config(); // Carga las variables de entorno

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json({ limit: "50kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

// Routes
app.use("/api/events", EventRoutes);
app.use("/api/event-schedules", EventScheduleRoutes);
app.use("/api/schedules", ScheduleRoutes);
app.use("/api/schedule-types", ScheduleTypeRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/user-schedules", UserScheduleRoutes);

// Inicializar modelos y relaciones
initModels();

// Start the server
sequelize
    .sync({ alter: true }) // Sincroniza los modelos con la base de datos en desarrollo
    .then(() => {
        console.log("Conexión a la base de datos establecida (desarrollo).");
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Unable to connect to the database (desarrollo):", err);
    });

export default app;
