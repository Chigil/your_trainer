import {$authHost, $host} from "./index";

export const createNewExercise = async (body) =>{
    const {data} = await $authHost.post('api/exercise',body)
    return data
}

export const getNewExercise = async (body) =>{
    const {data} = await $host.get('api/exercise',body)
    return data
}
