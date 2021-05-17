import axios, { AxiosResponse } from 'axios';
import { PetInterface } from '../modals/pet.interface';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
};

export const PetAPI = {
    getPosts: (): Promise<PetInterface[]> => requests.get('listing'),
    getAPost: (id: string): Promise<PetInterface> => requests.get(`${id}/`)
};