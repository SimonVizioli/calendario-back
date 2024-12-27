import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/db";

class Event extends Model {
    public UniqueID!: number;
    public name!: string;
    public code!: string;
    public description!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Event.init(
    {
        UniqueID: {
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
        tableName: "events",
    }
);

export default Event;
