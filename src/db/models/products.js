import sequelize from "../index.js"

import s from "sequelize"
const { DataTypes } = s

const Product = sequelize.define(
    "product",
    {
        id: {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.name,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: "https://image.url",
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }
)