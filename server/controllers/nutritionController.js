const {Nutrition} = require('../models/models')
const ApiError = require('../error/ApiError')

class NutritionController{

    async create(req,res,next){
        try {
            const {date, name_nutrition, calories} = req.body
            const food = await Nutrition.create({date, name_nutrition, calories})
            return res.json(food)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async get(req,res){
        const {date, name_nutrition, calories} =  req.query
        const food = await Nutrition.findAll({where:date, name_nutrition, calories})
        return res.json(food)
    }
}

module.exports = new NutritionController()