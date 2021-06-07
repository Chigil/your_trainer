import {$authHost, $host} from "./index";

export const createTraining = async (body) =>{
    const {data} = await $authHost.post('api/training',body)
    return data
}

export const getTraining = async (body) =>{
    const {data} = await $host.get('api/training',body)
    return data
}

