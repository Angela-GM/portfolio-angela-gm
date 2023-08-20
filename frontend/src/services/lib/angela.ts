import axiosClient from "../apiClient";

export function getAllInfoAngela(){
    return axiosClient.get('/angela')
}