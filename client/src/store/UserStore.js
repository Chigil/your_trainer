import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
        this._isAuth = false
        this._user = {}
        this._id = 0
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    setUserId(id){
        this._id = id
    }
    get IsAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
    get id(){
        return this._id
    }
}