import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class ScheduleType extends Model {
    public id!: string;
    public name!: string;
    public code!: string;
    public description!: string;
}

ScheduleType.init(
    {
        id: {
            type: DataTypes.UUID, // Define el campo como UUID
            defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID v4
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: "ScheduleType",
        timestamps: true,
    }
);

export default ScheduleType;
