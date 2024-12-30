import { Model, DataTypes } from "sequelize";
import sequelize from "../database/db";

class ScheduleType extends Model {
    public id!: number;
    public name!: string;
    public code!: string;
    public description!: string;
}

ScheduleType.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
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
        modelName: "ScheduleTypes",
        timestamps: true,
    }
);

export default ScheduleType;
