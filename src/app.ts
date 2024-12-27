import express from "express";
import EventRoutes from "./routes/EventRoutes";
import EventScheduleRoutes from "./routes/EventScheduleRoutes";
import ScheduleRoutes from "./routes/ScheduleRoutes";
import ScheduleTypeRoutes from "./routes/ScheduleTypeRoutes";
import UserRoutes from "./routes/UserRoutes";
import UserScheduleRoutes from "./routes/UserScheduleRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/events", EventRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/schedules", ScheduleRoutes);
app.use("/api/schedule-types", ScheduleTypeRoutes);
app.use("/api/event-schedules", EventScheduleRoutes);
app.use("/api/user-schedules", UserScheduleRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});

export default app;
