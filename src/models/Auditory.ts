import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import User from "./User";

class Auditory extends Model {
    public id!: string;
    public user_id!: string;
    public schedule_id!: string;
    public event!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    // Método para definir relaciones
    public static associate() {
        Auditory.belongsTo(User, {
            foreignKey: "user_id",
            as: "user", // Alias para acceder al usuario relacionado
        });
    }
}

Auditory.init(
    {
        id: {
            type: DataTypes.UUID, // Define el campo como UUID
            defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID v4
            primaryKey: true,
        },
        scheduleData: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        action: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Auditory",
        timestamps: true,
    }
);

export default Auditory;
