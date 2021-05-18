const {Record} = require('../models/models')
const ApiError = require('../error/ApiError')

class RecordController{

    async create(req,res,next){
        try {
            const {date, exercise_name, weight, num} = req.body
            const record = await Record.create({date, exercise_name, weight, num})
            return res.json(record)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }

    }

    async get(req,res){
        const {date, exercise_name, weight, num } =  req.query
        const record = await Record.findAll({where:date, exercise_name, weight,num })
        return res.json(record)
    }
}
module.exports = new RecordController()