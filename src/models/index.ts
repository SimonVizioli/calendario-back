import EventSchedule from "./EventSchedule";
import UserSchedule from "./UserSchedule";

// Inicializar relaciones entre los modelos
const initModels = () => {
    EventSchedule.associate();
    UserSchedule.associate();
};

export { initModels };
