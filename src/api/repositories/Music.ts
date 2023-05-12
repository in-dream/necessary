import HttpClient from '../api';
import { MusicType } from 'api/model/MusicType';
import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
let jsonConvert: JsonConvert = new JsonConvert();
export const fetchMusicInfo = async (id: number): Promise<MusicType> => {
  const result = await HttpClient.get<MusicType>(
    `/music/song/detail/?id=${id}&ids=%5B${id}%5D`,
  );
  return jsonConvert.deserializeObject(result, MusicType);
};
