import axios from "axios";
import {apiConfig } from "./confidential";

export const getMsDhoniApi = (url) => {
    return axios.get(url, {
        headers: {
            'X-RapidAPI-Key': apiConfig.XRapidAPIKey,
            'X-RapidAPI-Host': apiConfig.XRapidAPIHost
        }
    })
}