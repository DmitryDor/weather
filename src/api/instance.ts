import axios from "axios";


export const setCityAPI = {
    setCity(city: string) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=682fd6ac1cf1ff852dbf911b18a18d9e`)
    },
    setIcon(icon: string) {
        return axios.get(`https://openweathermap.org/img/wn/${icon}@2x.png`)
    }
}






