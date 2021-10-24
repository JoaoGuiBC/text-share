import axios from 'axios';
import { AXIOS_BASEURL } from '@env';

export const api = axios.create({
  baseURL: AXIOS_BASEURL,
});
