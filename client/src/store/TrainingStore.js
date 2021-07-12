import {makeAutoObservable} from "mobx";

export default class TrainingStore {
    constructor() {
        this._trainings = []
        this._exercises = []
        this._newExercise = {}
        this._nutrition = []
        this._weights = []
        this._records = []
        makeAutoObservable(this)
    }

    setNewExercise(exercise) {
        this._newExercise = exercise
    }

    setTraining(trainings) {
        this._trainings = trainings
    }

    setExercise(exercises) {
        this._exercises = exercises
    }

    setNutrition(nutrition) {
        this._nutrition = nutrition
    }

    removeNutrition(id) {
        return this._nutrition = this._nutrition.filter(nutrition => nutrition.id !== id)
    }

    removeRecord(id) {
        return this._records = this._records.filter(records => records.id !== id)
    }

    setWeight(weights) {
        this._weights = weights
    }

    setRecord(records) {
        this._records = records
    }

    get newExercise() {
        return this._newExercise
    }

    get trainings() {
        return this._trainings
    }

    get exercises() {
        return this._exercises
    }

    get nutrition() {
        return this._nutrition
    }

    get weights() {
        return this._weights
    }

    get records() {
        return this._records
    }
}