import axiosClient from "./axios"

type API = {
    method?: string;
    url?: string;
    data?: any;
    params?: any;
}

export const fetchApi = ({ method, url, data, params }: API) => {
    return axiosClient({
        method,
        url,
        data,
        params,
    })
}