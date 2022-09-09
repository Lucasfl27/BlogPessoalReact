import axios from 'axios';

export const api = axios.create({ 
        baseURL: 'https://bloggeneration.herokuapp.com'
})


export const login = async(url: any, dados: any, setDado: any ) => {
    const respota = await api.post(url, dados)
    setDado(respota.data)
}
