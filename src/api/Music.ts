// import type { MusicType } from "./model/MusicType";

export const featchMusicInfo = async (id: string): Promise<any> => {
  return await fetch(`/api/music/song/detail/?id=${id}&ids=%5B${id}%5D`).then(
    (response) => response.json(),
  );
};
