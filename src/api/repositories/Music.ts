import HttpClient from '../api';
import type { MusicType } from 'api/model/MusicType';

export const fetchMusicInfo = async (): Promise<any> => {
  return await HttpClient.get<MusicType>(
    `/music/song/detail/?id=4899152&ids=%5B4899152%5D`,
  );
};
