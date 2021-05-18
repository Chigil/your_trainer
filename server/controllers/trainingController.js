const {Training,Exercise} = require('../models/models')
const ApiError = require('../error/ApiError')

class TrainingController{

    async create(req,res,next){

        try {
            let {date, info} = req.body
            console.log({date,info})
            const training = await Training.create({date})
            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    Exercise.create({
                        id: i.id,
                        title: i.title,
                        text: i.text
                    })
                )
            }
            return res.json(training)
        }
            catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async get(req,res){
        const {date,exercise_name} =  req.query
        const training = await Training.findAll({where:date,exercise_name})
        return res.json(training)
    }
}
module.exports = new TrainingController()