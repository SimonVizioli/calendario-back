import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/db";

class EventSchedule extends Model {
    public UniqueID!: number;
    public schedule_id!: number;
    public event_id!: number;
    public user_id!: number;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

EventSchedule.init(
    {
        UniqueID: {
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
        tableName: "EventSchedule",
    }
);

export default EventSchedule;
