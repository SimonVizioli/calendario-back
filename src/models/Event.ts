import { Model, DataTypes } from "sequelize";
import sequelize from "../database/db";

class Event extends Model {
    public id!: string;
    public name!: string;
    public code!: string;
    public description!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Event.init(
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
        modelName: "Events",
        timestamps: true,
    }
);

export default Event;
