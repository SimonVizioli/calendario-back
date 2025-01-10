import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import User from "./User";
import Schedule from "./Schedule";

class UserSchedule extends Model {
    public id!: string;
    public schedule_id!: string;
    public user_id!: string;

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
            type: DataTypes.UUID, // Define el campo como UUID
            defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID v4
            primaryKey: true,
        },
        schedule_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "UserSchedule",
        timestamps: true,
    }
);

export default UserSchedule;
