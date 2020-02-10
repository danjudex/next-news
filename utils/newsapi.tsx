import fetch from 'isomorphic-unfetch';
import { NewsItem } from '../interfaces';

const API_URL = 'https://newsapi.org/v2';

const apiKey = process.env.NEWS_API_KEY;

export const getEverything = async ({ q }): Promise<NewsItem[]> => {
  const searchParams = new URLSearchParams({
    q,
    from: '2020-02-10',
    apiKey
  });
  const res = await fetch(API_URL + '/everything?' + searchParams);
  const json = await res.json();

  return json;
};
