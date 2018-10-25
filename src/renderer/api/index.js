import axios from 'axios';

const baseURL = 'http://localhost:3000';

export function getPersonalized() {
    const url = baseURL + `/personalized`;
    return axios.get(url)
}

export function getBanner(){
    const url = baseURL + `/banner`;
    return axios.get(url)
}

export function exclusive() {
    const url = baseURL +`/personalized/privatecontent`;
    return axios.get(url)
}

export function newsong() {
    const url = baseURL + `/personalized/newsong`;
    return axios.get(url)
}
export function catlist() {
    const url = baseURL + `/playlist/catlist`;
    return axios.get(url)
}
export function hotcat() {
    const url = baseURL + `/playlist/hot`;
    return axios.get(url)
}