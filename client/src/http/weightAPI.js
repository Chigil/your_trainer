import {$authHost, $host} from "./index";

export const createWeight = async (weight) =>{
    const {data} = await $authHost.post('api/weight',weight)
    return data
}

export const getWeight = async (weight) =>{
    const {data} = await $host.get('api/weight',weight)
    return data
}

