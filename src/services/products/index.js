import express from "express"
import sequelize from "sequelize"
import db from "../../db/models/index.js"
const { Op } = sequelize
const router = express.Router()

const { Product, Review } = db

router
    .route("/")
    .get(async (req, res, next) => {
        try {
            const data = await Product.findAll({
                include: Review,
                where: req.query.search
                    ? {
                        [Op.or]: [
                            { name: { [Op.iLike]: `%${req.query.search}%` } },
                            { categoty: { [Op.iLike]: `%${req.query.search}%` } },
                        ],
                    }
                    : {},
            })
            res.send(data)
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .post(async (req, res, next) => {
        try {
            const data = await Product.create(req.body)
            res.send(data)
        } catch (error) {
            console.log(error)
            next(error)
        }
    })

router
    .route("/:id")
    .get(async (req, res, next) => {
        try {
            const data = await Product.findOne({
                where: { id: req.params.id },
                include: Review,
            })
            if (data) {
                res.send(data)
            } else {
                res.status(404).send("Not Found")
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .put(async (req, res, next) => {
        try {
            const data = await Product.update(req.body, {
                where: {
                    id: req.params.id,
                },
                returning: true,
            })
            res.send(data[1][0])
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .delete(async (req, res, next) => {
        try {
            const rows = await Product.destroy({ where: { id: req.params.id } })
            if (rows > 0) {
                res.send("ok")
            } else {
                res.status(404).send("Not Found")
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    })


export default router