import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { AUTH_TOKEN, BACKEND_URL } from '@utils/consts';

type RequestsType = {
  url: string;
  config?: AxiosRequestConfig;
};

export type ResponseType<T = Record<string, never>> = {
  items?: T;
  searchAfter: string;
  limit: number;
  total: number;
};

const defaultConfig: AxiosRequestConfig = {
  baseURL: BACKEND_URL,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
};

export const getRequest = async <R>({ url, config }: RequestsType): Promise<AxiosResponse<ResponseType<R>>> => {
  return await axios.get(url, { ...defaultConfig, ...config });
};
