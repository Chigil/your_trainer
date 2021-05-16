const {Weight} = require('../models/models')
const ApiError = require('../error/ApiError')

class UserController{

    async create(req,res,next){
        try {
            const {date, weight} = req.body
            const kg = await Weight.create({date, weight})
            return res.json(kg)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }

    }
    async get(req,res){
        const {date,weight} =  req.query
        const kg = await Weight.findAll({where:date,weight})
        return res.json(kg)
    }
}
module.exports = new UserController()