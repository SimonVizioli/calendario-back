import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import ScheduleType from "./ScheduleType";

class Schedule extends Model {
    public id!: string;
    public startDate!: Date;
    public endDate!: Date;
    public description!: string;
    public deleted!: boolean;

    public static associate() {
        Schedule.belongsTo(ScheduleType, {
            foreignKey: "scheduleType_id",
            as: "scheduleType", // Alias para acceder al evento relacionado
        });
    }

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Schedule.init(
    {
        id: {
            type: DataTypes.UUID, // Define el campo como UUID
            defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID v4
            primaryKey: true,
        },
        scheduleType_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: "Schedule",
        timestamps: true,
    }
);

export default Schedule;
