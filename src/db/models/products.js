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
            type: DataTypes.STRING,
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

export default Product