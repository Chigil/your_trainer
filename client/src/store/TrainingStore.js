import {makeAutoObservable} from "mobx";

export default class TrainingStore {
    constructor() {
        this._trainings = []
        this._exercises = []
        this._nutrition = []
        this._weights = []
        this._records = []
        makeAutoObservable(this)
    }

    setTraining(trainings){
        this._trainings = trainings
    }
    setExercise(exercises){
        this._exercises = exercises
    }
    setNutrition(nutrition){
        this._nutrition = nutrition
    }
    setWeight(weights){
        this._weights = weights
    }
    setRecord(records){
        this._records = records
    }
    get exercises(){
        return this._exercises
    }
    get nutrition(){
        return this._nutrition
    }
    get weights(){
        return this._weights
    }
    get records(){
        return this._records
    }

}