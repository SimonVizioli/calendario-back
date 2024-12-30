import { Model, DataTypes } from "sequelize";
import sequelize from "../database/db";

class User extends Model {
    public id!: number; // Primary key
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    },
    {
        sequelize,
        modelName: "User",
        timestamps: true, // Enable timestamps if needed
    }
);

export default User;
