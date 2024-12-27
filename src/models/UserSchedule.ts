import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/db";

class UserSchedule extends Model {
    public UniqueID!: number;
    public schedule_id!: number;
    public user_id!: number;

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

UserSchedule.init(
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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "UserSchedules",
    }
);

export default UserSchedule;
