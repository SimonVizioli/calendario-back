import { Model, DataTypes } from "sequelize";
import sequelize from "../database/db";
import User from "./User";
import Schedule from "./Schedule";

class UserSchedule extends Model {
    public id!: number;
    public schedule_id!: number;
    public user_id!: number;

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    // Método para definir relaciones
    public static associate() {
        UserSchedule.belongsTo(User, {
            foreignKey: "user_id",
            as: "user", // Alias para acceder al usuario relacionado
        });

        UserSchedule.belongsTo(Schedule, {
            foreignKey: "schedule_id",
            as: "schedule", // Alias para acceder al horario relacionado
        });
    }
}

UserSchedule.init(
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
