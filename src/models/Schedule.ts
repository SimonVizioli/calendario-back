import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/db";

class Schedule extends Model {
    public UniqueID!: number;
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
        UniqueID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
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
        tableName: "schedules",
    }
);

export default Schedule;
