import { Model, DataTypes } from "sequelize";
import sequelize from "../database/db";
import Event from "./Event";
import Schedule from "./Schedule";
import User from "./User";

class EventSchedule extends Model {
    public id!: number;
    public schedule_id!: number;
    public event_id!: number;
    public user_id!: number;

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
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        schedule_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
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
