import { Model, DataTypes } from "sequelize";
import sequelize from "../database/db";

class User extends Model {
    public id!: string; // Primary key
    public firstName!: string;
    public lastName!: string;
    public username!: string;
    public email!: string;
    public password!: string;
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "User",
        timestamps: true, // Enable timestamps if needed
    }
);

export default User;
