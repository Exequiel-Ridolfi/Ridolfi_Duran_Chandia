import axios from "axios";

const instance =axios.create({
    baseURL: "https://api.attackontitanapi.com"
});

export const GetPersonajes =async()=>{
    const url="/characters";
    const responce =await instance.get(url);
    return responce.data.results;
    
}

export const GetLocalizacion= async()=>{
    const url ="/locations";
    const responce =await instance.get(url);
    return responce.data.results;
}
export const GetLocUni= async(id,state)=>{
    const url ='/locations/';
    const responce =await instance.get(url + id);
   state(responce.data);
}