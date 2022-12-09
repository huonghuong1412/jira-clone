import { useEffect, useState } from "react";
import axios from 'axios';

type useFetchProps = {
    url: string;
    method?: string;
    body?: any;
    params?: any;
}

export const useFetch = ({ url, method = 'GET', body, params }: useFetchProps) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios({ url, method, data: body, params })
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [url, method, body, params]);

    return { data, loading };
};