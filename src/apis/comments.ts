import axios, { AxiosError } from 'axios';
import voteInstance from './voteInstance';

export const getComments = (pageNm: number = 1, size: number = 6) => {
  try {
    const pageInfo = {
      pageInfo: {
        page: 1,
        size: 10,
        totalElements: 3,
        totalPages: 1,
      },
    };
    const data = voteInstance
      .get(`/comments?_page=${pageNm}&_limit=${size}`)
      .then((res) => {
        return { data: res };
      });
    const best = voteInstance.get(`/comment`).then((res) => {
      return { ...res };
    });
    return { ...best, ...data, ...pageInfo };
  } catch (error) {
    const err = error as AxiosError;
    if (axios.isAxiosError(err)) {
      console.error(err);
    }
  }
};
