import express from "express"
import db from "../../db/models/index.js"
import s from "sequelize"
const { Op } = s
const router = express.Router()

const { Product, Review } = db

router
    .route("/")
    .get(async (req, res, next) => {
        try {

        } catch (error) {

        }
    })
    .post(async (req, res, next) => {
        try {

        } catch (error) {

        }
    })

router
    .route("/:id")
    .get(async (req, res, next) => {
        try {

        } catch (error) {

        }
    })
    .put(async (req, res, next) => {
        try {

        } catch (error) {

        }
    })
    .delete(async (req, res, next) => {

    })