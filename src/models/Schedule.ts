import { Model, DataTypes } from "sequelize";
import sequelize from "../database/db";

class Schedule extends Model {
    public id!: string;
    public startDate!: Date;
    public endDate!: Date;
    public description!: string;
    public deleted!: boolean;

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
        modelName: "Schedules",
        timestamps: true,
    }
);

export default Schedule;
