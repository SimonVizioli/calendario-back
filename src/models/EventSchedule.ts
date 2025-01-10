import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Event from "./Event";
import Schedule from "./Schedule";
import User from "./User";

class EventSchedule extends Model {
    public id!: string;
    public schedule_id!: string;
    public event_id!: string;
    public user_id!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    // Método para definir relaciones
    public static associate() {
        EventSchedule.belongsTo(Event, {
            foreignKey: "event_id",
            as: "event", // Alias para acceder al evento relacionado
        });

        EventSchedule.belongsTo(Schedule, {
            foreignKey: "schedule_id",
            as: "schedule", // Alias para acceder al horario relacionado
        });

        EventSchedule.belongsTo(User, {
            foreignKey: "user_id",
            as: "user", // Alias para acceder al usuario relacionado
        });
    }
}

EventSchedule.init(
    {
        id: {
            type: DataTypes.UUID, // Define el campo como UUID
            defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID v4
            primaryKey: true,
        },
        schedule_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        event_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "EventSchedule",
        timestamps: true,
    }
);

export default EventSchedule;
