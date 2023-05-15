import HttpClient from '../api';
import { Player } from 'api/model/MusicType';
import { JsonConvert } from 'json2typescript';
let jsonConvert: JsonConvert = new JsonConvert();
export const fetchMusicInfo = async (ids: string[]): Promise<Player[]> => {
  const result = await HttpClient.get<{ songs: [] }>(`/music/song/detail/`, {
    params: {
      ids: `[${ids}]`,
    },
  });
  return jsonConvert.deserializeArray(result?.songs, Player);
};
