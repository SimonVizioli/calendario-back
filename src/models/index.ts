import EventSchedule from "./Auditory";
import Schedule from "./Schedule";
import UserSchedule from "./UserSchedule";

// Inicializar relaciones entre los modelos
const initModels = () => {
    EventSchedule.associate();
    UserSchedule.associate();
    Schedule.associate();
};

export { initModels };
